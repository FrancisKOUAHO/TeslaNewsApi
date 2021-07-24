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
exports.updateTag = exports.getTag = exports.getAllTags = exports.deleteTag = exports.createTag = void 0;
const tag_model_1 = require("../models/tag.model");
// POST - /posts # inserts a new category in table
const createTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, metaTitle, slug, content } = req.body;
    if (!title || !metaTitle || !slug || !content) {
        return res.status(422).json({ message: "Les champs title, metaTitle, slug, content sont obligatoires." });
    }
    const tagInput = {
        title,
        metaTitle,
        slug,
        content
    };
    const tagsCreated = yield tag_model_1.Tag.create(tagInput);
    return res.status(201).json({ data: tagsCreated });
});
exports.createTag = createTag;
// - GET - /posts # return all posts
const getAllTags = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let tags = yield tag_model_1.Tag.find((err, tags) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(tags);
        }
    });
});
exports.getAllTags = getAllTags;
// - GET - /posts/{id} # return a posts id
const getTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield tag_model_1.Tag.findById(req.params.id, (err, tag) => {
        if (err) {
            return res.status(422).json({ message: "Impossible de récupérer l'id Tag " });
        }
        else {
            res.send(tag);
        }
    });
});
exports.getTag = getTag;
// - PATCH - /posts/{id} # return a posts id
const updateTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-ignore
    yield tag_model_1.Tag.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Le tag a été supprimé avec succès");
        }
    });
});
exports.updateTag = updateTag;
// - DELETE - /posts/{1} # return a posts id 1
const deleteTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-ignore
    yield tag_model_1.Tag.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Le tag a été supprimé avec succès");
        }
    });
});
exports.deleteTag = deleteTag;
