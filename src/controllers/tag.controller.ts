import { Request, Response } from "express";

import { Tag, TagInput } from "../models/tag.model";


// POST - /posts # inserts a new category in table
const createTag = async (req: Request, res: Response) => {

  const { title, metaTitle, slug, content } = req.body;

  if (!title || !metaTitle || !slug || !content) {
    return res.status(422).json({ message: "Les champs title, metaTitle, slug, content sont obligatoires." });
  }

  const tagInput: TagInput = {
    title,
    metaTitle,
    slug,
    content
  };

  const tagsCreated = await Tag.create(tagInput);

  return res.status(201).json({ data: tagsCreated });

};

// - GET - /posts # return all posts
const getAllTags = async (req: Request, res: Response) => {
  let tags = await Tag.find((err: any, tags: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(tags);
    }
  });

};


// - GET - /posts/{id} # return a posts id
const getTag = async (req: Request, res: Response) => {
  await Tag.findById(req.params.id, (err: any, tag: any) => {
    if (err) {
      return res.status(422).json({ message: "Impossible de récupérer l'id Tag " });
    } else {
      res.send(tag);
    }
  });

};

// - PATCH - /posts/{id} # return a posts id
const updateTag = async (req: Request, res: Response) => {
  // @ts-ignore
  await Tag.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Le tag a été supprimé avec succès");
    }
  });
};


// - DELETE - /posts/{1} # return a posts id 1
const deleteTag = async (req: Request, res: Response) => {
  // @ts-ignore
  await Tag.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Le tag a été supprimé avec succès");
    }
  });
};

export { createTag, deleteTag, getAllTags, getTag, updateTag };
