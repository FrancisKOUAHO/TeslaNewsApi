import { Request, Response } from "express";

import { Category, CategoryInput } from "../models/category.model";


// POST - /posts # inserts a new category in table
const createCategory = async (req: Request, res: Response) => {
  const { title, metaTitle, slug, content } = req.body;

  if (!title || !metaTitle || !slug || !content) {
    return res.status(422).json({ message: "Les champs title, metaTitle, slug, content sont obligatoires." });
  }

  const categoryInput: CategoryInput = {
    title,
    metaTitle,
    slug,
    content
  };

  const categoryCreated = await Category.create(categoryInput);

  return res.status(201).json({ data: categoryCreated });

}


// - GET - /posts # return all categories
const getAllCategory = async (req: Request, res: Response) => {
  let category = await Category.find((err: any, category: any)=>{
    if (err) {
      return res.status(422).json({ message: "Impossible de récupérer les catégories" });
    } else {
      res.send(category);
    }

  })

}

// - GET - /posts/{id} # return a posts id
const getCategory = async (req: Request, res: Response) => {
  await Category.findById(req.params.id, (err: any, category: any) =>{
    if (err) {
      return res.status(422).json({ message: "Impossible de récupérer l'id Category" });
    } else {
      res.send(category);
    }
  })

}


// - PATCH - /posts/{id} # return a posts id
const updateCategory = async (req: Request, res: Response) => {
  Category.findByIdAndUpdate(req.params.id, req.body, (err: any, category: any)=>{
    if (err) {
      return res.status(422).json({ message: "Impossible de mettre à jour du Category" });
    } else {
      res.send(category);
    }
  })
}

const deleteCategory = async (req: Request, res: Response) => {
  // @ts-ignore
  await Category.deleteOne({ _id: req.params.id }, (err) =>{
    if (err) {
      res.send(err);
    } else {
      res.send("Le Category a été supprimé avec succès",);
    }
  });

}


export { createCategory, getAllCategory, getCategory, updateCategory, deleteCategory };
