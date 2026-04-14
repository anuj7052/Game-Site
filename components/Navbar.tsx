'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/lib/ThemeContext';

const categories = ['Action', 'Racing', 'Puzzle', 'Shooting', 'Sports', 'Adventure', 'Strategy', 'Arcade'];

interface SearchResult {
  _id: string;
  title: string;
  slug: string;
  category: string;
  thumbnail: string;
}

export default function Navbar() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const debounceTimer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = useCallback(async (query: string) => {
    if (query.trim().length < 2) {
      setSearchResults([]);
      return;
    }
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setSearchResults(data.games?.slice(0, 6) || []);
    } catch {
      setSearchResults([]);
    }
  }, []);

  const onSearchChange = (value: string) => {
    setSearchQuery(value);
    setShowResults(true);
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => handleSearch(value), 300);
  };

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setShowResults(false);
      setSearchQuery('');
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface-900/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-surface-600/50'
          : 'bg-surface-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-neon-purple flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:block">GameVault</span>
          </Link>

          {/* Search Bar */}
          <div ref={searchRef} className="flex-1 max-w-xl mx-4 relative">
            <form onSubmit={onSearchSubmit}>
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  onFocus={() => searchResults.length > 0 && setShowResults(true)}
                  placeholder="Search games..."
                  className="w-full pl-10 pr-4 py-2 bg-surface-700 border border-surface-600 rounded-xl
                             text-sm text-slate-200 placeholder-slate-500
                             focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50
                             transition-all duration-200"
                />
              </div>
            </form>

            {/* Search Dropdown */}
            <AnimatePresence>
              {showResults && searchResults.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-surface-800 border border-surface-600 rounded-xl shadow-2xl overflow-hidden"
                >
                  {searchResults.map((game) => (
                    <Link
                      key={game._id}
                      href={`/game/${game.slug}`}
                      onClick={() => { setShowResults(false); setSearchQuery(''); }}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-surface-700 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-surface-600 overflow-hidden flex-shrink-0">
                        <img src={game.thumbnail} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-200">{game.title}</p>
                        <p className="text-xs text-slate-500">{game.category}</p>
                      </div>
                    </Link>
                  ))}
                  <Link
                    href={`/search?q=${encodeURIComponent(searchQuery)}`}
                    onClick={() => { setShowResults(false); setSearchQuery(''); }}
                    className="block px-4 py-3 text-center text-sm text-primary-400 hover:bg-surface-700 border-t border-surface-600 transition-colors"
                  >
                    View all results →
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Category Links + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-1">
            {categories.slice(0, 4).map((cat) => (
              <Link
                key={cat}
                href={`/category/${cat.toLowerCase()}`}
                className="btn-ghost text-sm"
              >
                {cat}
              </Link>
            ))}
            <Link href="/favorites" className="btn-ghost text-sm" title="Favorites">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </Link>

            {/* ── Theme Toggle ── */}
            <button
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl border
                         border-primary-500/30 bg-surface-700 hover:bg-surface-600
                         text-slate-300 hover:text-white transition-all duration-200 text-sm font-medium ml-1"
            >
              {theme === 'dark' ? (
                <>
                  {/* Sun icon */}
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm10-9a1 1 0 010 2h-1a1 1 0 110-2h1zM3 12a1 1 0 010-2H2a1 1 0 100 2h1zm15.657-7.657a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM7.05 16.95a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM5.636 6.364a1 1 0 00-1.414-1.414l-.707.707A1 1 0 004.93 7.07l.707-.707zM12 7a5 5 0 100 10A5 5 0 0012 7z"/>
                  </svg>
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  {/* Moon icon */}
                  <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
                  </svg>
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-surface-800 border-t border-surface-600"
          >
            <div className="px-4 py-4 space-y-1">
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/category/${cat.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-surface-700 rounded-lg transition-colors"
                >
                  {cat}
                </Link>
              ))}
              <hr className="border-surface-600 my-2" />
              <Link
                href="/favorites"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-surface-700 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Favorites
              </Link>
              <button
                onClick={() => { toggleTheme(); setIsOpen(false); }}
                className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-surface-700 rounded-lg transition-colors"
              >
                {theme === 'dark' ? (
                  <>
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm10-9a1 1 0 010 2h-1a1 1 0 110-2h1zM3 12a1 1 0 010-2H2a1 1 0 100 2h1zm15.657-7.657a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM7.05 16.95a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM5.636 6.364a1 1 0 00-1.414-1.414l-.707.707A1 1 0 004.93 7.07l.707-.707zM12 7a5 5 0 100 10A5 5 0 0012 7z"/>
                    </svg>
                    Switch to Light Mode
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
                    </svg>
                    Switch to Dark Mode
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
