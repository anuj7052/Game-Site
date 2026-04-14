'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import GameCard from './GameCard';
import SkeletonCard from './SkeletonCard';

interface Game {
  _id: string;
  title: string;
  slug: string;
  thumbnail: string;
  category: string;
  rating: number;
  playCount: number;
}

export default function InfiniteGameLoader() {
  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const res = await fetch(`/api/games?page=${page}&limit=20&sort=popular`);
      const data = await res.json();

      setGames((prev) => {
        const existingSlugs = new Set(prev.map((g) => g.slug));
        const newGames = data.games.filter((g: Game) => !existingSlugs.has(g.slug));
        return [...prev, ...newGames];
      });
      setHasMore(data.pagination.hasMore);
      setPage((prev) => prev + 1);
    } catch (err) {
      console.error('Failed to load games:', err);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore]);

  useEffect(() => {
    loadMore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [loadMore, hasMore, loading]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
        {games.map((game, idx) => (
          <motion.div
            key={game._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (idx % 20) * 0.03 }}
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

        {loading &&
          Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={`skel-${i}`} />)}
      </div>

      {/* Intersection Observer Target */}
      {hasMore && <div ref={observerRef} className="h-20" />}

      {!hasMore && games.length > 0 && (
        <p className="text-center text-slate-500 text-sm mt-8">You&apos;ve reached the end! 🎮</p>
      )}
    </>
  );
}
