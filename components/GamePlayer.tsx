'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import FavoriteButton from './FavoriteButton';

interface Game {
  _id?: string;
  title: string;
  slug: string;
  iframeUrl: string;
  thumbnail: string;
}

interface GamePlayerProps {
  game: Game;
}

export default function GamePlayer({ game }: GamePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isBroken, setIsBroken] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const brokenTimer = useRef<ReturnType<typeof setTimeout>>();

  // Track play count + recently played; detect origin-blocked games
  useEffect(() => {
    if (!isPlaying) return;

    fetch('/api/play', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug: game.slug }),
    }).catch(() => {});

    try {
      const recent: string[] = JSON.parse(localStorage.getItem('recentlyPlayed') || '[]');
      const updated = [game.slug, ...recent.filter((s) => s !== game.slug)].slice(0, 20);
      localStorage.setItem('recentlyPlayed', JSON.stringify(updated));
    } catch {
      // localStorage not available
    }

    // If after 8 s the user hasn't clicked into the iframe (window.blur never fired),
    // the game is likely blocked by origin restrictions.
    brokenTimer.current = setTimeout(() => {
      if (!document.hasFocus()) return; // user already clicked in — game loaded fine
      setIsBroken(true);
    }, 8000);

    // When the user clicks inside the iframe the top window loses focus → game is working
    const onBlur = () => {
      clearTimeout(brokenTimer.current);
      setIsBroken(false);
    };
    window.addEventListener('blur', onBlur, { once: true });

    return () => {
      clearTimeout(brokenTimer.current);
      window.removeEventListener('blur', onBlur);
    };
  }, [isPlaying, game.slug]);

  const toggleFullscreen = useCallback(async () => {
    if (!containerRef.current) return;
    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch {
      // Fullscreen not supported
    }
  }, []);

  useEffect(() => {
    const handleFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const openInNewTab = () => window.open(game.iframeUrl, '_blank', 'noopener,noreferrer');

  return (
    <div ref={containerRef} className="relative w-full rounded-2xl overflow-hidden bg-surface-800 neon-border">

      {!isPlaying ? (
        /* ── Play Cover ── */
        <div className="relative aspect-video">
          <img src={game.thumbnail} alt={game.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsPlaying(true)}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary-600 hover:bg-primary-500
                         flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.5)]
                         transition-colors duration-200"
            >
              <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.button>
            <p className="text-slate-300 text-sm font-medium">Click to Play</p>
          </div>
        </div>
      ) : (
        /* ── Iframe Player ── */
        <div className="relative w-full" style={{ minHeight: '480px', aspectRatio: '16/9' }}>

          {/* Loading spinner */}
          {!isLoaded && !isBroken && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface-900 z-10">
              <div className="w-12 h-12 rounded-full border-4 border-primary-500/30 border-t-primary-500 animate-spin mb-4" />
              <p className="text-slate-400 text-sm">Loading game…</p>
            </div>
          )}

          {/* Origin-blocked fallback overlay */}
          {isBroken && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface-900/95 z-20 gap-5 p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">Game blocked on localhost</h3>
                <p className="text-slate-400 text-sm max-w-sm">
                  This game provider restricts embedding to registered domains.
                  Open it in a new tab to play, or deploy to a real domain.
                </p>
              </div>
              <div className="flex gap-3 flex-wrap justify-center">
                <button
                  onClick={openInNewTab}
                  className="flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-500
                             text-white font-semibold rounded-xl transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in New Tab
                </button>
                <button
                  onClick={() => { setIsBroken(false); setIsPlaying(false); }}
                  className="px-5 py-2.5 bg-surface-700 hover:bg-surface-600 text-slate-300 rounded-xl transition-colors"
                >
                  Go Back
                </button>
              </div>
            </div>
          )}

          <iframe
            src={game.iframeUrl}
            title={game.title}
            className="absolute inset-0 w-full h-full border-0"
            allow="autoplay; fullscreen; gamepad; pointer-lock"
            allowFullScreen
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      )}

      {/* ── Controls Bar ── */}
      <div className="flex items-center justify-between px-4 py-3 bg-surface-800 border-t border-surface-600/50">
        <h3 className="text-sm font-semibold text-white truncate">{game.title}</h3>
        <div className="flex items-center gap-2">
          {/* Open in New Tab — always visible once playing so user always has an escape hatch */}
          {isPlaying && (
            <button
              onClick={openInNewTab}
              title="Open in new tab"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-700 hover:bg-surface-600
                         text-xs text-slate-300 hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              New Tab
            </button>
          )}
          <FavoriteButton slug={game.slug} size="sm" />
          <button
            onClick={toggleFullscreen}
            className="w-8 h-8 rounded-lg bg-surface-700 hover:bg-surface-600 flex items-center justify-center
                       text-slate-400 hover:text-white transition-colors"
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isFullscreen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              )}
            </svg>
          </button>
        </div>
      </div>

    </div>
  );
}
