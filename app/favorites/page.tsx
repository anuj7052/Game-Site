'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GameCard from '@/components/GameCard';
import SkeletonCard from '@/components/SkeletonCard';

interface Game {
  _id: string;
  title: string;
  slug: string;
  thumbnail: string;
  category: string;
  rating: number;
  playCount: number;
}

export default function FavoritesPage() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const favs: string[] = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (favs.length === 0) {
          setLoading(false);
          return;
        }

        const results = await Promise.all(
          favs.map((slug) =>
            fetch(`/api/games/${slug}`).then((res) => (res.ok ? res.json() : null))
          )
        );
        setGames(results.filter(Boolean));
      } catch {
        // localStorage not available
      } finally {
        setLoading(false);
      }
    };

    loadFavorites();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-3">
          <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          My Favorites
        </h1>
        <p className="text-slate-400 mt-2">Your saved games collection</p>
      </div>

      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : games.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {games.map((game, idx) => (
            <motion.div
              key={game._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <GameCard
                title={game.title}
                slug={game.slug}
                thumbnail={game.thumbnail}
                category={game.category}
                rating={game.rating}
                playCount={game.playCount}
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">💜</div>
          <h2 className="text-xl font-semibold text-slate-300 mb-2">No favorites yet</h2>
          <p className="text-slate-500 mb-6">
            Click the heart icon on any game to add it to your favorites
          </p>
          <a href="/" className="btn-primary inline-flex items-center gap-2">
            Browse Games
          </a>
        </div>
      )}
    </div>
  );
}
