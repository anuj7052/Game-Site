import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Game from '@/models/Game';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const { slug } = await request.json();

    if (!slug || typeof slug !== 'string') {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }

    const game = await Game.findOneAndUpdate(
      { slug },
      { $inc: { playCount: 1 } },
      { new: true }
    ).lean();

    if (!game) {
      return NextResponse.json({ error: 'Game not found' }, { status: 404 });
    }

    return NextResponse.json({ playCount: game.playCount });
  } catch (error) {
    console.error('POST /api/play error:', error);
    return NextResponse.json({ error: 'Failed to update play count' }, { status: 500 });
  }
}
