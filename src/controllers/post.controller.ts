import { Request, Response } from "express";

import { Post, PostInput } from "../models/post.model";


// POST - /posts # inserts a new posts in table
const createPost = async (req: Request, res: Response) => {
  const { title, metaTitle, slug, summary, published, publishedAt, content, category, tag } = req.body;

  if (!title || !metaTitle || !slug || !summary || !published || !publishedAt || !content || !category || !tag) {
    return res.status(422).json({ message: "Les champs title, metaTitle, slug, summary, published, publishedAt, content, category, tag sont obligatoires." });
  }

  const postInput: PostInput = {
    title,
    metaTitle,
    slug,
    summary,
    published,
    publishedAt,
    content,
    category,
    tag
  };

  const postCreated = await Post.create(postInput);

  return res.status(201).json({ data: postCreated });
};


// - GET - /posts # return all posts
const getAllPosts = async (req: Request, res: Response) => {
  let posts = await Post.find((err: any, posts: any) => {
    if (err) {
      return res.status(422).json({ message: "Impossible de récupérer les articles" });
    } else {
      res.send(posts);
    }
  });
};


// - GET - /posts/{id} # return a posts id
const getPost = async (req: Request, res: Response) => {
  await Post.findById(req.params.id, (err: any, post: any) =>{
    if (err) {
      return res.status(422).json({ message: "Impossible de récupérer l'id d'un article" });
    } else {
      res.send(post);
    }
  })
};

// - PATCH - /posts/{id} # return a posts id
const updatePost = async (req: Request, res: Response) => {
  Post.findByIdAndUpdate(req.params.id, req.body, (err: any, post: any)=>{
    if (err) {
      return res.status(422).json({ message: "Impossible de mettre à jour l'article" });
    } else {
      res.send(post);
    }
  })
};


// - DELETE - /posts/{1} # return a posts id 1
const deletePost = async (req: Request, res: Response) => {
  // @ts-ignore
  await Post.deleteOne({ _id: req.params.id }, (err) =>{
    if (err) {
      res.send(err);
    } else {
      res.send("L'article a été supprimé avec succès",);
    }
  });
}

export { createPost, deletePost, getAllPosts, getPost, updatePost };


