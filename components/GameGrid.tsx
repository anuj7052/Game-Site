'use client';

import { motion } from 'framer-motion';
import GameCard from './GameCard';

interface Game {
  _id: string;
  title: string;
  slug: string;
  thumbnail: string;
  category: string;
  rating: number;
  playCount: number;
}

interface GameGridProps {
  games: Game[];
  title?: string;
  columns?: 2 | 3 | 4 | 5;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function GameGrid({ games, title, columns = 4 }: GameGridProps) {
  const gridCols = {
    2: 'grid-cols-2 sm:grid-cols-2',
    3: 'grid-cols-2 sm:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
    5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
  };

  return (
    <section>
      {title && (
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white">{title}</h2>
        </div>
      )}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className={`grid ${gridCols[columns]} gap-4 sm:gap-6`}
      >
        {games.map((game) => (
          <motion.div key={game._id} variants={itemVariants}>
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
      </motion.div>
    </section>
  );
}
