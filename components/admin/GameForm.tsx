'use client';

import { useState, useEffect } from 'react';

const categories = ['Action', 'Racing', 'Puzzle', 'Shooting', 'Sports', 'Adventure', 'Strategy', 'Arcade'];

interface Game {
  title: string;
  slug: string;
  category: string;
  thumbnail: string;
  iframeUrl: string;
  rating: number;
  description: string;
  featured: boolean;
  tags: string[];
}

interface GameFormProps {
  game: Game | null;
  onSave: (data: Partial<Game>) => void;
  onCancel: () => void;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function GameForm({ game, onSave, onCancel }: GameFormProps) {
  const [form, setForm] = useState({
    title: '',
    slug: '',
    category: 'Action',
    thumbnail: '',
    iframeUrl: '',
    rating: 4.0,
    description: '',
    featured: false,
    tags: '',
  });

  useEffect(() => {
    if (game) {
      setForm({
        title: game.title,
        slug: game.slug,
        category: game.category,
        thumbnail: game.thumbnail,
        iframeUrl: game.iframeUrl,
        rating: game.rating,
        description: game.description || '',
        featured: game.featured,
        tags: game.tags?.join(', ') || '',
      });
    }
  }, [game]);

  const handleTitleChange = (title: string) => {
    setForm((prev) => ({
      ...prev,
      title,
      slug: game ? prev.slug : slugify(title),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      title: form.title,
      slug: form.slug,
      category: form.category,
      thumbnail: form.thumbnail,
      iframeUrl: form.iframeUrl,
      rating: Number(form.rating),
      description: form.description,
      featured: form.featured,
      tags: form.tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
    });
  };

  const inputClass =
    'w-full px-4 py-2.5 bg-surface-700 border border-surface-600 rounded-xl text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-400 mb-1.5">Title *</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            required
            className={inputClass}
            placeholder="Game title"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1.5">Slug *</label>
          <input
            type="text"
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
            required
            className={inputClass}
            placeholder="game-slug"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-400 mb-1.5">Category *</label>
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className={inputClass}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1.5">Rating</label>
          <input
            type="number"
            value={form.rating}
            onChange={(e) => setForm({ ...form, rating: parseFloat(e.target.value) })}
            min={0}
            max={5}
            step={0.1}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-slate-400 mb-1.5">Thumbnail URL *</label>
        <input
          type="url"
          value={form.thumbnail}
          onChange={(e) => setForm({ ...form, thumbnail: e.target.value })}
          required
          className={inputClass}
          placeholder="https://..."
        />
      </div>

      <div>
        <label className="block text-sm text-slate-400 mb-1.5">Iframe URL *</label>
        <input
          type="url"
          value={form.iframeUrl}
          onChange={(e) => setForm({ ...form, iframeUrl: e.target.value })}
          required
          className={inputClass}
          placeholder="https://html5.gamedistribution.com/..."
        />
      </div>

      <div>
        <label className="block text-sm text-slate-400 mb-1.5">Description</label>
        <textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          rows={3}
          className={`${inputClass} resize-none`}
          placeholder="Game description..."
        />
      </div>

      <div>
        <label className="block text-sm text-slate-400 mb-1.5">Tags (comma-separated)</label>
        <input
          type="text"
          value={form.tags}
          onChange={(e) => setForm({ ...form, tags: e.target.value })}
          className={inputClass}
          placeholder="action, multiplayer, 3d"
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="featured"
          checked={form.featured}
          onChange={(e) => setForm({ ...form, featured: e.target.checked })}
          className="w-4 h-4 rounded border-surface-600 bg-surface-700 text-primary-600 focus:ring-primary-500"
        />
        <label htmlFor="featured" className="text-sm text-slate-300">Featured game</label>
      </div>

      <div className="flex items-center justify-end gap-3 pt-4 border-t border-surface-600">
        <button type="button" onClick={onCancel} className="btn-ghost">Cancel</button>
        <button type="submit" className="btn-primary">
          {game ? 'Update Game' : 'Create Game'}
        </button>
      </div>
    </form>
  );
}
