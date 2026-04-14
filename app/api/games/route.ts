import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Game from '@/models/Game';
import { seedGames } from '@/lib/seed-data';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = Math.min(parseInt(searchParams.get('limit') || '20'), 50);
  const category = searchParams.get('category');
  const sort = searchParams.get('sort') || 'createdAt';
  const featured = searchParams.get('featured');

  try {
    await dbConnect();

    const filter: Record<string, unknown> = {};
    if (category) filter.category = category;
    if (featured === 'true') filter.featured = true;

    const sortOptions: Record<string, 1 | -1> = {};
    switch (sort) {
      case 'popular':
        sortOptions.playCount = -1;
        break;
      case 'rating':
        sortOptions.rating = -1;
        break;
      case 'title':
        sortOptions.title = 1;
        break;
      default:
        sortOptions.createdAt = -1;
    }

    const skip = (page - 1) * limit;
    const [games, total] = await Promise.all([
      Game.find(filter).sort(sortOptions).skip(skip).limit(limit).lean(),
      Game.countDocuments(filter),
    ]);

    return NextResponse.json(
      { games, pagination: { page, limit, total, pages: Math.ceil(total / limit), hasMore: page * limit < total } },
      { headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600' } }
    );
  } catch (error) {
    console.error('GET /api/games error (falling back to seed data):', error);

    // Fallback to seed data when DB is unavailable
    let filtered = [...seedGames];
    if (category) filtered = filtered.filter((g) => g.category.toLowerCase() === category.toLowerCase());
    if (featured === 'true') filtered = filtered.filter((g) => g.featured);

    switch (sort) {
      case 'popular': filtered.sort((a, b) => b.playCount - a.playCount); break;
      case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
      case 'title': filtered.sort((a, b) => a.title.localeCompare(b.title)); break;
    }

    const skip = (page - 1) * limit;
    const total = filtered.length;
    const games = filtered.slice(skip, skip + limit);

    return NextResponse.json(
      { games, pagination: { page, limit, total, pages: Math.ceil(total / limit), hasMore: page * limit < total } },
      { headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600' } }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const adminSecret = request.headers.get('x-admin-secret');
    if (adminSecret !== process.env.ADMIN_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const body = await request.json();
    const game = await Game.create(body);
    return NextResponse.json(game, { status: 201 });
  } catch (error: unknown) {
    console.error('POST /api/games error:', error);
    if (error instanceof Error && 'code' in error && (error as { code: number }).code === 11000) {
      return NextResponse.json({ error: 'A game with this slug already exists' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Failed to create game' }, { status: 500 });
  }
}
