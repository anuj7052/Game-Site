import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IGame extends Document {
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
  createdAt: Date;
  updatedAt: Date;
}

const GameSchema = new Schema<IGame>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters'],
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: ['Action', 'Racing', 'Puzzle', 'Shooting', 'Sports', 'Adventure', 'Strategy', 'Arcade'],
      index: true,
    },
    thumbnail: {
      type: String,
      required: [true, 'Thumbnail URL is required'],
    },
    iframeUrl: {
      type: String,
      required: [true, 'Iframe URL is required'],
    },
    rating: {
      type: Number,
      default: 4.0,
      min: 0,
      max: 5,
    },
    playCount: {
      type: Number,
      default: 0,
      min: 0,
    },
    description: {
      type: String,
      default: '',
      maxlength: [2000, 'Description cannot exceed 2000 characters'],
    },
    featured: {
      type: Boolean,
      default: false,
      index: true,
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

GameSchema.index({ title: 'text', description: 'text', tags: 'text' });

const Game: Model<IGame> = mongoose.models.Game || mongoose.model<IGame>('Game', GameSchema);

export default Game;
