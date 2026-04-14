import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Game from '@/models/Game';
import { seedGames } from '@/lib/seed-data';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query || query.trim().length < 2) {
    return NextResponse.json({ games: [] });
  }

  try {
    await dbConnect();

    const sanitized = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const games = await Game.find({
      $or: [
        { title: { $regex: sanitized, $options: 'i' } },
        { tags: { $regex: sanitized, $options: 'i' } },
        { category: { $regex: sanitized, $options: 'i' } },
      ],
    })
      .sort({ playCount: -1 })
      .limit(20)
      .lean();

    return NextResponse.json({ games });
  } catch (error) {
    console.error('GET /api/search error (falling back to seed data):', error);

    // Fallback to seed data
    const q = query.toLowerCase();
    const games = seedGames
      .filter(
        (g) =>
          g.title.toLowerCase().includes(q) ||
          g.category.toLowerCase().includes(q) ||
          g.tags.some((t) => t.toLowerCase().includes(q))
      )
      .sort((a, b) => b.playCount - a.playCount)
      .slice(0, 20);

    return NextResponse.json({ games });
  }
}
