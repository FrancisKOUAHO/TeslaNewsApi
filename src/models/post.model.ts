import mongoose, { Schema, Model, Document } from 'mongoose';


type PostDocument = Document & {
  title: string;
  metaTitle: string;
  slug: string;
  summary: string;
  published: string;
  publishedAt: string;
  content: string;
  category: string;
  tag: string,
  NumberPeopleSaw: number
};

type PostInput = {
  title: PostDocument['title'];
  metaTitle: PostDocument['metaTitle'];
  slug: PostDocument['slug'];
  summary: PostDocument['summary'];
  published: PostDocument['published'];
  publishedAt: PostDocument['publishedAt'];
  content:PostDocument['content'];
  category: PostDocument['category'];
  tag: PostDocument['tag'];
    NumberPeopleSaw: PostDocument['NumberPeopleSaw'];
};

const postsSchema = new Schema(
  {
    title: {
      type: Schema.Types.String,
      required: true,
    },
    metaTitle: {
      type: Schema.Types.String,
      required: true,
    },
    slug: {
      type: Schema.Types.String,
      required: true,
    },
    summary: {
      type: Schema.Types.String,
      required: true,
    },
    published: {
      type: Schema.Types.String,
      required: true,
    },
    publishedAt: {
      type: Schema.Types.String,
      required: false,
    },
    content: {
      type: Schema.Types.String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'category',
      required: false,
      index: true,
    },
    tag: {
      type: Schema.Types.ObjectId,
      ref: 'tag',
      required: false,
      index: true,
    },
      NumberPeopleSaw: {
      type: Schema.Types.ObjectId,
      ref: 'NumberPeopleSaw',
      required: false,
      index: true,
    },
  },
  {
    collection: 'posts',
    timestamps: true,
  },
);

const Post: Model<PostDocument> = mongoose.model<PostDocument>('Post', postsSchema);

export { Post, PostInput, PostDocument };
