import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Game from '@/models/Game';
import { seedGames } from '@/lib/seed-data';

export async function GET(
  _request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await dbConnect();
    const game = await Game.findOne({ slug: params.slug }).lean();

    if (!game) {
      return NextResponse.json({ error: 'Game not found' }, { status: 404 });
    }

    return NextResponse.json(game);
  } catch (error) {
    console.error('GET /api/games/[slug] error (falling back to seed data):', error);

    // Fallback to seed data
    const game = seedGames.find((g) => g.slug === params.slug);
    if (!game) {
      return NextResponse.json({ error: 'Game not found' }, { status: 404 });
    }
    return NextResponse.json(game);
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const adminSecret = request.headers.get('x-admin-secret');
    if (adminSecret !== process.env.ADMIN_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const body = await request.json();
    const game = await Game.findOneAndUpdate(
      { slug: params.slug },
      body,
      { new: true, runValidators: true }
    ).lean();

    if (!game) {
      return NextResponse.json({ error: 'Game not found' }, { status: 404 });
    }

    return NextResponse.json(game);
  } catch (error) {
    console.error('PUT /api/games/[slug] error:', error);
    return NextResponse.json({ error: 'Failed to update game' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const adminSecret = request.headers.get('x-admin-secret');
    if (adminSecret !== process.env.ADMIN_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const game = await Game.findOneAndDelete({ slug: params.slug }).lean();

    if (!game) {
      return NextResponse.json({ error: 'Game not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Game deleted successfully' });
  } catch (error) {
    console.error('DELETE /api/games/[slug] error:', error);
    return NextResponse.json({ error: 'Failed to delete game' }, { status: 500 });
  }
}
