import mongoose, { Schema, Model, Document } from 'mongoose';


type ArticleDocument = Document & {
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

type ArticleInput = {
  title: ArticleDocument['title'];
  metaTitle: ArticleDocument['metaTitle'];
  slug: ArticleDocument['slug'];
  summary: ArticleDocument['summary'];
  published: ArticleDocument['published'];
  publishedAt: ArticleDocument['publishedAt'];
  content:ArticleDocument['content'];
  category: ArticleDocument['category'];
  tag: ArticleDocument['tag'];
    NumberPeopleSaw: ArticleDocument['NumberPeopleSaw'];
};

const articlesSchema = new Schema(
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

const Article: Model<ArticleDocument> = mongoose.model<ArticleDocument>('Article', articlesSchema);

export { Article, ArticleInput, ArticleDocument };
