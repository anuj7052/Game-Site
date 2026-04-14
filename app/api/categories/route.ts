import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Game from '@/models/Game';
import { seedGames } from '@/lib/seed-data';

export async function GET() {
  try {
    await dbConnect();

    const categories = await Game.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $project: { _id: 0, name: '$_id', count: 1 } },
    ]);

    return NextResponse.json(categories, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    });
  } catch (error) {
    console.error('GET /api/categories error (falling back to seed data):', error);

    // Fallback to seed data when DB is unavailable
    const countMap: Record<string, number> = {};
    for (const g of seedGames) {
      countMap[g.category] = (countMap[g.category] || 0) + 1;
    }
    const categories = Object.entries(countMap)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);

    return NextResponse.json(categories, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    });
  }
}
