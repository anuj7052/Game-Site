import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import dbConnect from '@/lib/dbConnect';
import Game from '@/models/Game';
import GamePlayer from '@/components/GamePlayer';
import GameGrid from '@/components/GameGrid';
import AdPlaceholder from '@/components/AdPlaceholder';
import { seedGames } from '@/lib/seed-data';

export const revalidate = 3600;

interface Props {
  params: { slug: string };
}

async function getGame(slug: string) {
  try {
    await dbConnect();
    return Game.findOne({ slug }).lean();
  } catch {
    return seedGames.find((g) => g.slug === slug) ?? null;
  }
}

async function getRelatedGames(category: string, excludeSlug: string) {
  try {
    await dbConnect();
    return Game.find({ category, slug: { $ne: excludeSlug } })
      .sort({ playCount: -1 })
      .limit(8)
      .lean();
  } catch {
    return seedGames
      .filter((g) => g.category === category && g.slug !== excludeSlug)
      .sort((a, b) => b.playCount - a.playCount)
      .slice(0, 8);
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const game = await getGame(params.slug);

  if (!game) {
    return { title: 'Game Not Found' };
  }

  return {
    title: `Play ${game.title} - Free Online Game`,
    description: game.description || `Play ${game.title} online for free. No download required!`,
    openGraph: {
      title: `Play ${game.title} - Free Online Game | GameVault`,
      description: game.description || `Play ${game.title} online for free.`,
      images: [{ url: game.thumbnail, width: 512, height: 384, alt: game.title }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Play ${game.title} | GameVault`,
      description: game.description || `Play ${game.title} online for free.`,
      images: [game.thumbnail],
    },
  };
}

export default async function GamePage({ params }: Props) {
  const game = await getGame(params.slug);

  if (!game) {
    notFound();
  }

  const relatedGames = await getRelatedGames(game.category, game.slug);

  const serializedGame = JSON.parse(JSON.stringify(game));
  const serializedRelated = JSON.parse(JSON.stringify(relatedGames));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Ad Banner */}
      <AdPlaceholder variant="banner" className="mb-6 mx-auto max-w-3xl" />

      <div className="lg:flex gap-6">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <GamePlayer game={serializedGame} />

          {/* Game Info */}
          <div className="mt-6 glass-card p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white">{game.title}</h1>
                <div className="flex items-center gap-3 mt-2">
                  <span className="px-3 py-1 text-xs font-semibold uppercase bg-primary-600/20 text-primary-300 rounded-full border border-primary-500/20">
                    {game.category}
                  </span>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium">{game.rating.toFixed(1)}</span>
                  </div>
                  <span className="text-sm text-slate-500">
                    {game.playCount.toLocaleString()} plays
                  </span>
                </div>
              </div>
            </div>

            {game.description && (
              <p className="text-slate-400 leading-relaxed">{game.description}</p>
            )}

            {game.tags && game.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {game.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs text-slate-400 bg-surface-700 rounded-lg border border-surface-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-[300px] flex-shrink-0 mt-6 lg:mt-0 space-y-6">
          <AdPlaceholder variant="sidebar" className="hidden lg:flex" />
        </div>
      </div>

      {/* Related Games */}
      {serializedRelated.length > 0 && (
        <div className="mt-12">
          <GameGrid games={serializedRelated} title="🎯 Related Games" />
        </div>
      )}
    </div>
  );
}
