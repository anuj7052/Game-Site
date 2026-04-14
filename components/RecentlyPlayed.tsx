'use client';

import { useState, useEffect } from 'react';
import GameCard from './GameCard';

interface Game {
  _id: string;
  title: string;
  slug: string;
  thumbnail: string;
  category: string;
  rating: number;
  playCount: number;
}

export default function RecentlyPlayed() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    try {
      const recent: string[] = JSON.parse(localStorage.getItem('recentlyPlayed') || '[]');
      if (recent.length === 0) return;

      const slugs = recent.slice(0, 6);
      Promise.all(
        slugs.map((slug) =>
          fetch(`/api/games/${slug}`).then((res) => (res.ok ? res.json() : null))
        )
      ).then((results) => {
        setGames(results.filter(Boolean));
      });
    } catch {
      // localStorage not available
    }
  }, []);

  if (games.length === 0) return null;

  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">⏱️ Recently Played</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {games.map((game) => (
          <GameCard
            key={game._id}
            title={game.title}
            slug={game.slug}
            thumbnail={game.thumbnail}
            category={game.category}
            rating={game.rating}
            playCount={game.playCount}
          />
        ))}
      </div>
    </section>
  );
}
