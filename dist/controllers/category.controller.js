"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.getCategory = exports.getAllCategory = exports.createCategory = void 0;
const category_model_1 = require("../models/category.model");
// POST - /posts # inserts a new category in table
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, metaTitle, slug, content } = req.body;
    if (!title || !metaTitle || !slug || !content) {
        return res.status(422).json({ message: "Les champs title, metaTitle, slug, content sont obligatoires." });
    }
    const categoryInput = {
        title,
        metaTitle,
        slug,
        content
    };
    const categoryCreated = yield category_model_1.Category.create(categoryInput);
    return res.status(201).json({ data: categoryCreated });
});
exports.createCategory = createCategory;
// - GET - /posts # return all categories
const getAllCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let category = yield category_model_1.Category.find((err, category) => {
        if (err) {
            return res.status(422).json({ message: "Impossible de récupérer les catégories" });
        }
        else {
            res.send(category);
        }
    });
});
exports.getAllCategory = getAllCategory;
// - GET - /posts/{id} # return a posts id
const getCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield category_model_1.Category.findById(req.params.id, (err, category) => {
        if (err) {
            return res.status(422).json({ message: "Impossible de récupérer l'id Category" });
        }
        else {
            res.send(category);
        }
    });
});
exports.getCategory = getCategory;
// - PATCH - /posts/{id} # return a posts id
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    category_model_1.Category.findByIdAndUpdate(req.params.id, req.body, (err, category) => {
        if (err) {
            return res.status(422).json({ message: "Impossible de mettre à jour du Category" });
        }
        else {
            res.send(category);
        }
    });
});
exports.updateCategory = updateCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-ignore
    yield category_model_1.Category.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Le Category a été supprimé avec succès");
        }
    });
});
exports.deleteCategory = deleteCategory;
