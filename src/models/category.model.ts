import mongoose, { Schema, Model, Document } from 'mongoose';

type CategoryDocument = Document & {
  title: string;
  metaTitle: string;
  slug: string;
  content: string;
};

type CategoryInput = {
  title: CategoryDocument['title'];
  metaTitle: CategoryDocument['metaTitle'];
  slug: CategoryDocument['slug'];
  content:CategoryDocument['content'];
};

const categorySchema = new Schema(
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
    content: {
      type: Schema.Types.String,
      required: true,
    }
  },
  {
    collection: 'categories',
    timestamps: true,
  },
);

const Category: Model<CategoryDocument> = mongoose.model<CategoryDocument>('Category', categorySchema);

export { Category, CategoryInput, CategoryDocument };
