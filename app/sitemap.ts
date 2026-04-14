import { MetadataRoute } from 'next';
import dbConnect from '@/lib/dbConnect';
import Game from '@/models/Game';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://gamevault.com';

const categories = ['action', 'racing', 'puzzle', 'shooting', 'sports', 'adventure', 'strategy', 'arcade'];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let games: Array<{ slug: string; updatedAt?: Date }> = [];
  try {
    await dbConnect();
    games = await Game.find({}, { slug: 1, updatedAt: 1 }).lean();
  } catch {
    // DB not available — return static pages only
  }

  const gameEntries: MetadataRoute.Sitemap = games.map((game) => ({
    url: `${SITE_URL}/game/${game.slug}`,
    lastModified: game.updatedAt || new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const categoryEntries: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${SITE_URL}/category/${cat}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.7,
  }));

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${SITE_URL}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/favorites`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
  ];

  return [...staticPages, ...categoryEntries, ...gameEntries];
}
