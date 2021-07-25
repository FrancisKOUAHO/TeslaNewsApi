import mongoose, { Schema, Model, Document } from 'mongoose';

type TagDocument = Document & {
  title: string;
  metaTitle: string;
  slug: string;
  content: string;
};

type TagInput = {
  title: TagDocument['title'];
  metaTitle: TagDocument['metaTitle'];
  slug: TagDocument['slug'];
  content:TagDocument['content'];
};

const tagsSchema = new Schema(
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
    },
  },
  {
    collection: 'tags',
    timestamps: true,
  },
);

const Tag: Model<TagDocument> = mongoose.model<TagDocument>('Tag', tagsSchema);

export { Tag, TagInput, TagDocument };
