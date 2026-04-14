import dbConnect from '@/lib/dbConnect';
import Game from '@/models/Game';
import HeroCarousel from '@/components/HeroCarousel';
import GameGrid from '@/components/GameGrid';
import AdPlaceholder from '@/components/AdPlaceholder';
import RecentlyPlayed from '@/components/RecentlyPlayed';
import InfiniteGameLoader from '@/components/InfiniteGameLoader';
import { seedGames } from '@/lib/seed-data';

export const revalidate = 3600; // re-generate at most every hour

async function getFeaturedGames() {
  try {
    await dbConnect();
    return Game.find({ featured: true }).sort({ playCount: -1 }).limit(8).lean();
  } catch {
    return seedGames.filter((g) => g.featured).sort((a, b) => b.playCount - a.playCount).slice(0, 8);
  }
}

async function getTrendingGames() {
  try {
    await dbConnect();
    return Game.find({}).sort({ playCount: -1 }).limit(8).lean();
  } catch {
    return [...seedGames].sort((a, b) => b.playCount - a.playCount).slice(0, 8);
  }
}

async function getCategoryGames(category: string) {
  try {
    await dbConnect();
    return Game.find({ category }).sort({ playCount: -1 }).limit(4).lean();
  } catch {
    return seedGames.filter((g) => g.category === category).sort((a, b) => b.playCount - a.playCount).slice(0, 4);
  }
}

export default async function HomePage() {
  const [featured, trending] = await Promise.all([
    getFeaturedGames(),
    getTrendingGames(),
  ]);

  const [actionGames, racingGames, puzzleGames] = await Promise.all([
    getCategoryGames('Action'),
    getCategoryGames('Racing'),
    getCategoryGames('Puzzle'),
  ]);

  const serialize = (games: unknown[]) =>
    JSON.parse(JSON.stringify(games));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10">
      {/* Hero Carousel */}
      <HeroCarousel games={serialize(featured)} />

      {/* Ad Banner */}
      <AdPlaceholder variant="banner" className="mx-auto max-w-3xl" />

      {/* Recently Played */}
      <RecentlyPlayed />

      {/* Trending Games */}
      <GameGrid games={serialize(trending)} title="🔥 Trending Games" />

      {/* Ad In-Feed */}
      <AdPlaceholder variant="in-feed" />

      {/* Category Rows */}
      {actionGames.length > 0 && (
        <GameGrid games={serialize(actionGames)} title="⚡ Action Games" />
      )}

      {racingGames.length > 0 && (
        <GameGrid games={serialize(racingGames)} title="🏎️ Racing Games" />
      )}

      <AdPlaceholder variant="in-feed" />

      {puzzleGames.length > 0 && (
        <GameGrid games={serialize(puzzleGames)} title="🧩 Puzzle Games" />
      )}

      {/* All Games - Infinite Scroll */}
      <section>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">🎮 All Games</h2>
        <InfiniteGameLoader />
      </section>
    </div>
  );
}
