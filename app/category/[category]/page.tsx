import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import dbConnect from '@/lib/dbConnect';
import Game from '@/models/Game';
import GameGrid from '@/components/GameGrid';
import { seedGames } from '@/lib/seed-data';

export const dynamic = 'force-dynamic';

const validCategories = ['action', 'racing', 'puzzle', 'shooting', 'sports', 'adventure', 'strategy', 'arcade'];

interface Props {
  params: { category: string };
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function getGamesByCategory(category: string) {
  try {
    await dbConnect();
    return Game.find({ category: capitalize(category) })
      .sort({ playCount: -1 })
      .lean();
  } catch {
    const cap = capitalize(category);
    return seedGames.filter((g) => g.category === cap).sort((a, b) => b.playCount - a.playCount);
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = params.category.toLowerCase();
  if (!validCategories.includes(cat)) return { title: 'Category Not Found' };

  const name = capitalize(cat);
  return {
    title: `${name} Games - Play Free Online`,
    description: `Play the best free ${name} games online. No download required — instant play in your browser!`,
    openGraph: {
      title: `${name} Games | GameVault`,
      description: `Browse and play free ${name} games online at GameVault.`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const cat = params.category.toLowerCase();

  if (!validCategories.includes(cat)) {
    notFound();
  }

  const games = await getGamesByCategory(cat);
  const serialized = JSON.parse(JSON.stringify(games));
  const name = capitalize(cat);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">{name} Games</h1>
        <p className="text-slate-400 mt-2">
          Browse {serialized.length} free {name.toLowerCase()} games to play online
        </p>
      </div>

      {serialized.length > 0 ? (
        <GameGrid games={serialized} columns={4} />
      ) : (
        <div className="text-center py-20">
          <p className="text-slate-500 text-lg">No games found in this category yet.</p>
        </div>
      )}
    </div>
  );
}
