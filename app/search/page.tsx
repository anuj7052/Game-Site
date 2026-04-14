'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
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

export default function SearchPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const debounceTimer = useRef<NodeJS.Timeout>();

  const search = useCallback(async (q: string) => {
    if (q.trim().length < 2) {
      setResults([]);
      setSearched(false);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
      const data = await res.json();
      setResults(data.games || []);
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
      setSearched(true);
    }
  }, []);

  useEffect(() => {
    if (initialQuery) {
      search(initialQuery);
    }
  }, [initialQuery, search]);

  const handleInput = (value: string) => {
    setQuery(value);
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => search(value), 400);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search Input */}
      <div className="max-w-2xl mx-auto mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-6">Search Games</h1>
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => handleInput(e.target.value)}
            placeholder="Search by game name, category, or tag..."
            autoFocus
            className="w-full pl-12 pr-4 py-4 bg-surface-800 border border-surface-600 rounded-2xl
                       text-lg text-slate-200 placeholder-slate-500
                       focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50
                       transition-all duration-200"
          />
        </div>
      </div>

      {/* Results */}
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : results.length > 0 ? (
        <>
          <p className="text-sm text-slate-400 mb-6">
            Found {results.length} game{results.length !== 1 ? 's' : ''} matching &quot;{query}&quot;
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {results.map((game, idx) => (
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
        </>
      ) : searched ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🎮</div>
          <h2 className="text-xl font-semibold text-slate-300 mb-2">No games found</h2>
          <p className="text-slate-500">Try searching for something else</p>
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-xl font-semibold text-slate-300 mb-2">Start searching</h2>
          <p className="text-slate-500">Type at least 2 characters to search for games</p>
        </div>
      )}
    </div>
  );
}
