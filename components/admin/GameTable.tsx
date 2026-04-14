'use client';

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

interface GameTableProps {
  games: Game[];
  onEdit: (game: Game) => void;
  onDelete: (slug: string) => void;
}

export default function GameTable({ games, onEdit, onDelete }: GameTableProps) {
  if (games.length === 0) {
    return (
      <div className="text-center py-20 glass-card">
        <div className="text-5xl mb-4">🎮</div>
        <h2 className="text-lg font-semibold text-slate-300 mb-2">No games yet</h2>
        <p className="text-slate-500">Add a game or seed the database to get started.</p>
      </div>
    );
  }

  return (
    <div className="glass-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-surface-600 text-left">
              <th className="px-4 py-3 text-slate-400 font-medium">Game</th>
              <th className="px-4 py-3 text-slate-400 font-medium">Category</th>
              <th className="px-4 py-3 text-slate-400 font-medium">Rating</th>
              <th className="px-4 py-3 text-slate-400 font-medium">Plays</th>
              <th className="px-4 py-3 text-slate-400 font-medium">Featured</th>
              <th className="px-4 py-3 text-slate-400 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-600/50">
            {games.map((game) => (
              <tr key={game._id} className="hover:bg-surface-700/50 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-600 overflow-hidden flex-shrink-0">
                      <img src={game.thumbnail} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-slate-200 font-medium">{game.title}</p>
                      <p className="text-xs text-slate-500">/{game.slug}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="px-2 py-0.5 text-xs bg-surface-600 text-slate-300 rounded-md">
                    {game.category}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-300">
                  <div className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {game.rating.toFixed(1)}
                  </div>
                </td>
                <td className="px-4 py-3 text-slate-300">{game.playCount.toLocaleString()}</td>
                <td className="px-4 py-3">
                  {game.featured ? (
                    <span className="text-neon-green text-xs">● Featured</span>
                  ) : (
                    <span className="text-slate-600 text-xs">—</span>
                  )}
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => onEdit(game)}
                      className="px-3 py-1.5 text-xs bg-primary-600/20 text-primary-300 rounded-lg
                                 hover:bg-primary-600/30 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(game.slug)}
                      className="px-3 py-1.5 text-xs bg-red-600/20 text-red-400 rounded-lg
                                 hover:bg-red-600/30 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
