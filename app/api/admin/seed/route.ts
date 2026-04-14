import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Game from '@/models/Game';
import { seedGames } from '@/lib/seed-data';

export async function POST(request: NextRequest) {
  try {
    const adminSecret = request.headers.get('x-admin-secret');
    if (adminSecret !== process.env.ADMIN_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();

    const existingCount = await Game.countDocuments();
    if (existingCount > 0) {
      return NextResponse.json(
        { message: `Database already has ${existingCount} games. Clear manually first if you want to reseed.` },
        { status: 200 }
      );
    }

    const games = await Game.insertMany(seedGames);

    return NextResponse.json({
      message: `Successfully seeded ${games.length} games`,
      count: games.length,
    });
  } catch (error) {
    console.error('POST /api/admin/seed error:', error);
    return NextResponse.json({ error: 'Failed to seed database' }, { status: 500 });
  }
}
