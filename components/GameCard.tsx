'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import FavoriteButton from './FavoriteButton';

interface GameCardProps {
  title: string;
  slug: string;
  thumbnail: string;
  category: string;
  rating: number;
  playCount: number;
}

const CATEGORY_GRADIENTS: Record<string, string> = {
  Action:   'from-red-900 via-orange-900 to-yellow-900',
  Racing:   'from-blue-900 via-cyan-900 to-teal-900',
  Puzzle:   'from-purple-900 via-violet-900 to-indigo-900',
  Shooting: 'from-gray-900 via-slate-800 to-zinc-900',
  Sports:   'from-green-900 via-emerald-900 to-teal-900',
  Adventure:'from-amber-900 via-orange-900 to-red-900',
  Strategy: 'from-indigo-900 via-blue-900 to-cyan-900',
  Arcade:   'from-pink-900 via-fuchsia-900 to-purple-900',
};

function formatPlayCount(count: number): string {
  if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M`;
  if (count >= 1_000) return `${(count / 1_000).toFixed(0)}K`;
  return count.toString();
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3 h-3 ${star <= Math.round(rating) ? 'text-yellow-400' : 'text-slate-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-slate-400 ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function GameCard({ title, slug, thumbnail, category, rating, playCount }: GameCardProps) {
  const [imgError, setImgError] = useState(false);
  const gradient = CATEGORY_GRADIENTS[category] ?? 'from-slate-900 via-slate-800 to-slate-900';

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative"
    >
      <Link href={`/game/${slug}`} className="block">
        <div className="glass-card overflow-hidden hover-glow transition-all duration-300">
          {/* Thumbnail */}
          <div className="relative aspect-[4/3] overflow-hidden">
            {!imgError ? (
              <img
                src={thumbnail}
                alt={title}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${gradient} flex flex-col items-center justify-center`}>
                <svg className="w-10 h-10 text-white/30 mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="text-white/40 text-xs font-medium text-center px-2 line-clamp-2">{title}</span>
              </div>
            )}
            {/* Play Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                className="w-14 h-14 rounded-full bg-primary-600/90 backdrop-blur-sm flex items-center justify-center
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </div>
            {/* Category Badge */}
            <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider
                             bg-surface-900/70 backdrop-blur-sm text-primary-300 rounded-md border border-primary-500/20">
              {category}
            </span>
          </div>

          {/* Info */}
          <div className="p-3">
            <h3 className="text-sm font-semibold text-slate-200 truncate group-hover:text-primary-300 transition-colors">
              {title}
            </h3>
            <div className="flex items-center justify-between mt-1.5">
              <StarRating rating={rating} />
              <span className="text-[11px] text-slate-500 flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                </svg>
                {formatPlayCount(playCount)}
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* Favorite Button - positioned absolutely */}
      <div className="absolute top-2 right-2 z-10">
        <FavoriteButton slug={slug} size="sm" />
      </div>
    </motion.div>
  );
}
