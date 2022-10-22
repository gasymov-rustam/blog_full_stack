import { model, Schema, Types } from 'mongoose';

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
      unique: true,
    },
    tags: {
      type: Array,
      default: [],
    },
    viewsCount: {
      type: Number,
      default: 0,
    },
    user: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
    },
    imageUrl: String,
  },
  {
    timestamps: true,
  }
);

export const PostModel = model('Post', PostSchema);
