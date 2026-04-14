'use client';

import { useState, useEffect, useCallback } from 'react';
import GameForm from '@/components/admin/GameForm';
import GameTable from '@/components/admin/GameTable';

interface Game {
  _id: string;
  title: string;
  slug: string;
  category: string;
  thumbnail: string;
  iframeUrl: string;
  rating: number;
  playCount: number;
  description: string;
  featured: boolean;
  tags: string[];
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [secret, setSecret] = useState('');
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingGame, setEditingGame] = useState<Game | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState('');
  const [seeding, setSeeding] = useState(false);

  const getSecret = () => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('adminSecret') || '';
    }
    return '';
  };

  const fetchGames = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/games?limit=50&sort=title');
      const data = await res.json();
      setGames(data.games || []);
    } catch {
      setMessage('Failed to fetch games');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const stored = sessionStorage.getItem('adminSecret');
    if (stored) {
      setIsAuthenticated(true);
      setSecret(stored);
      fetchGames();
    }
  }, [fetchGames]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (secret.trim()) {
      sessionStorage.setItem('adminSecret', secret.trim());
      setIsAuthenticated(true);
      fetchGames();
    }
  };

  const handleSeed = async () => {
    setSeeding(true);
    setMessage('');
    try {
      const res = await fetch('/api/admin/seed', {
        method: 'POST',
        headers: { 'x-admin-secret': getSecret() },
      });
      const data = await res.json();
      setMessage(data.message);
      fetchGames();
    } catch {
      setMessage('Failed to seed database');
    } finally {
      setSeeding(false);
    }
  };

  const handleSave = async (gameData: Partial<Game>) => {
    const adminSecret = getSecret();

    try {
      if (editingGame) {
        const res = await fetch(`/api/games/${editingGame.slug}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'x-admin-secret': adminSecret,
          },
          body: JSON.stringify(gameData),
        });
        if (!res.ok) {
          const err = await res.json();
          setMessage(err.error || 'Failed to update game');
          return;
        }
        setMessage('Game updated successfully');
      } else {
        const res = await fetch('/api/games', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-admin-secret': adminSecret,
          },
          body: JSON.stringify(gameData),
        });
        if (!res.ok) {
          const err = await res.json();
          setMessage(err.error || 'Failed to create game');
          return;
        }
        setMessage('Game created successfully');
      }

      setShowForm(false);
      setEditingGame(null);
      fetchGames();
    } catch {
      setMessage('An error occurred');
    }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this game?')) return;

    try {
      const res = await fetch(`/api/games/${slug}`, {
        method: 'DELETE',
        headers: { 'x-admin-secret': getSecret() },
      });
      if (res.ok) {
        setMessage('Game deleted');
        fetchGames();
      } else {
        const err = await res.json();
        setMessage(err.error || 'Failed to delete game');
      }
    } catch {
      setMessage('Failed to delete game');
    }
  };

  const handleEdit = (game: Game) => {
    setEditingGame(game);
    setShowForm(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="glass-card p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <label className="block text-sm text-slate-400 mb-2">Admin Secret</label>
            <input
              type="password"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="Enter admin secret..."
              className="w-full px-4 py-3 bg-surface-700 border border-surface-600 rounded-xl text-slate-200
                         focus:outline-none focus:ring-2 focus:ring-primary-500/50 mb-4"
            />
            <button type="submit" className="w-full btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Admin Panel</h1>
          <p className="text-slate-400 mt-1">{games.length} games in database</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleSeed}
            disabled={seeding}
            className="px-4 py-2 text-sm bg-neon-green/20 text-neon-green border border-neon-green/30 rounded-lg
                       hover:bg-neon-green/30 transition-colors disabled:opacity-50"
          >
            {seeding ? 'Seeding...' : 'Seed Database'}
          </button>
          <button
            onClick={() => { setEditingGame(null); setShowForm(true); }}
            className="btn-primary text-sm"
          >
            + Add Game
          </button>
          <button
            onClick={() => { sessionStorage.removeItem('adminSecret'); setIsAuthenticated(false); }}
            className="btn-ghost text-sm text-red-400 hover:text-red-300"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Status Message */}
      {message && (
        <div className="mb-6 px-4 py-3 rounded-xl bg-primary-600/10 border border-primary-500/20 text-primary-300 text-sm">
          {message}
          <button onClick={() => setMessage('')} className="ml-2 text-primary-400 hover:text-white">✕</button>
        </div>
      )}

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-card p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">
                {editingGame ? 'Edit Game' : 'Add New Game'}
              </h2>
              <button
                onClick={() => { setShowForm(false); setEditingGame(null); }}
                className="text-slate-400 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <GameForm
              game={editingGame}
              onSave={handleSave}
              onCancel={() => { setShowForm(false); setEditingGame(null); }}
            />
          </div>
        </div>
      )}

      {/* Games Table */}
      {loading ? (
        <div className="text-center py-20 text-slate-400">Loading games...</div>
      ) : (
        <GameTable games={games} onEdit={handleEdit} onDelete={handleDelete} />
      )}
    </div>
  );
}
