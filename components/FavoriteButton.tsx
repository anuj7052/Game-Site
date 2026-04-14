'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface FavoriteButtonProps {
  slug: string;
  size?: 'sm' | 'md';
}

export default function FavoriteButton({ slug, size = 'md' }: FavoriteButtonProps) {
  const [isFav, setIsFav] = useState(() => {
    if (typeof window === 'undefined') return false;
    try {
      const favs: string[] = JSON.parse(localStorage.getItem('favorites') || '[]');
      return favs.includes(slug);
    } catch {
      return false;
    }
  });

  const toggle = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      try {
        const favs: string[] = JSON.parse(localStorage.getItem('favorites') || '[]');
        const updated = isFav ? favs.filter((s) => s !== slug) : [...favs, slug];
        localStorage.setItem('favorites', JSON.stringify(updated));
        setIsFav(!isFav);
      } catch {
        // localStorage not available
      }
    },
    [slug, isFav]
  );

  const sizeClasses = size === 'sm' ? 'w-8 h-8' : 'w-10 h-10';
  const iconSize = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';

  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      onClick={toggle}
      className={`${sizeClasses} rounded-full bg-surface-900/60 backdrop-blur-sm flex items-center justify-center
                  border border-surface-600/30 transition-colors duration-200
                  ${isFav ? 'text-red-500 border-red-500/30' : 'text-slate-400 hover:text-red-400'}`}
      title={isFav ? 'Remove from favorites' : 'Add to favorites'}
    >
      <svg
        className={iconSize}
        fill={isFav ? 'currentColor' : 'none'}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </motion.button>
  );
}
