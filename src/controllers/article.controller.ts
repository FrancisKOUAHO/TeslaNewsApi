import { Request, Response } from "express";

import { Article, ArticleInput } from "../models/article.model";


// POST - /posts # inserts a new posts in table
const createArticle = async (req: Request, res: Response) => {
  const { title, metaTitle, slug, summary, published, publishedAt, content, category, tag, NumberPeopleSaw } = req.body;

  if (!title || !metaTitle || !slug || !summary || !published || !publishedAt || !content || !category || !tag || !NumberPeopleSaw) {
    return res.status(422).json({ message: "Les champs title, metaTitle, slug, summary, published, publishedAt, content, category, tag sont obligatoires." });
  }

  const articleInput: ArticleInput = {
    title,
    metaTitle,
    slug,
    summary,
    published,
    publishedAt,
    content,
    category,
    tag,
    NumberPeopleSaw
  };

  const articleCreated = await Article.create(articleInput);

  return res.status(201).json({ data: articleCreated });
};


// - GET - /posts # return all posts
const getAllArticles = async (req: Request, res: Response) => {
  let articles = await Article.find((err: any, articles: any) => {
    if (err) {
      return res.status(422).json({ message: "Impossible de récupérer les articles" });
    } else {
      res.send(articles);
    }
  });
};


// - GET - /posts/{id} # return a posts id
const getArticle = async (req: Request, res: Response) => {
  await Article.findById(req.params.id, (err: any, article: any) =>{
    if (err) {
      return res.status(422).json({ message: "Impossible de récupérer l'id d'un article" });
    } else {
      res.send(article);
    }
  })
};

// - PATCH - /posts/{id} # return a posts id
const updateArticle = async (req: Request, res: Response) => {
  Article.findByIdAndUpdate(req.params.id, req.body, (err: any, article: any)=>{
    if (err) {
      return res.status(422).json({ message: "Impossible de mettre à jour l'article" });
    } else {
      res.send(article);
    }
  })
};


// - DELETE - /posts/{1} # return a posts id 1
const deleteArticle = async (req: Request, res: Response) => {
  // @ts-ignore
  await Article.deleteOne({ _id: req.params.id }, (err) =>{
    if (err) {
      res.send(err);
    } else {
      res.send("L'article a été supprimé avec succès",);
    }
  });
}

export { createArticle, deleteArticle, getAllArticles, getArticle, updateArticle };


