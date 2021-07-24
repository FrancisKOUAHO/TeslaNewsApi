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
exports.updatePost = exports.getPost = exports.getAllPosts = exports.deletePost = exports.createPost = void 0;
const post_model_1 = require("../models/post.model");
// POST - /posts # inserts a new posts in table
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, metaTitle, slug, summary, published, publishedAt, content, category, tag } = req.body;
    if (!title || !metaTitle || !slug || !summary || !published || !publishedAt || !content || !category || !tag) {
        return res.status(422).json({ message: "Les champs title, metaTitle, slug, summary, published, publishedAt, content, category, tag sont obligatoires." });
    }
    const postInput = {
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
    const postCreated = yield post_model_1.Post.create(postInput);
    return res.status(201).json({ data: postCreated });
});
exports.createPost = createPost;
// - GET - /posts # return all posts
const getAllPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let posts = yield post_model_1.Post.find((err, posts) => {
        if (err) {
            return res.status(422).json({ message: "Impossible de récupérer les articles" });
        }
        else {
            res.send(posts);
        }
    });
});
exports.getAllPosts = getAllPosts;
// - GET - /posts/{id} # return a posts id
const getPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield post_model_1.Post.findById(req.params.id, (err, post) => {
        if (err) {
            return res.status(422).json({ message: "Impossible de récupérer l'id d'un article" });
        }
        else {
            res.send(post);
        }
    });
});
exports.getPost = getPost;
// - PATCH - /posts/{id} # return a posts id
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    post_model_1.Post.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
        if (err) {
            return res.status(422).json({ message: "Impossible de mettre à jour l'article" });
        }
        else {
            res.send(post);
        }
    });
});
exports.updatePost = updatePost;
// - DELETE - /posts/{1} # return a posts id 1
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-ignore
    yield post_model_1.Post.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("L'article a été supprimé avec succès");
        }
    });
});
exports.deletePost = deletePost;
