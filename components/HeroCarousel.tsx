'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface FeaturedGame {
  _id: string;
  title: string;
  slug: string;
  thumbnail: string;
  description: string;
  category: string;
}

interface HeroCarouselProps {
  games: FeaturedGame[];
}

export default function HeroCarousel({ games }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % games.length);
  }, [games.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + games.length) % games.length);
  }, [games.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  if (games.length === 0) return null;

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden group">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={games[current].thumbnail}
            alt={games[current].title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface-900 via-surface-900/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-900/60 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider
                               bg-primary-600/80 text-white rounded-full mb-3">
                {games[current].category}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2">
                {games[current].title}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-lg line-clamp-2 mb-4">
                {games[current].description}
              </p>
              <Link
                href={`/game/${games[current].slug}`}
                className="inline-flex items-center gap-2 btn-primary text-sm sm:text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play Now
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm
                   flex items-center justify-center text-white opacity-0 group-hover:opacity-100
                   transition-opacity duration-300 hover:bg-black/60"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm
                   flex items-center justify-center text-white opacity-0 group-hover:opacity-100
                   transition-opacity duration-300 hover:bg-black/60"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 right-6 flex items-center gap-2">
        {games.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === current ? 'bg-primary-400 w-6' : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
