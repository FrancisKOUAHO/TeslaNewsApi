"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRoute = void 0;
const express_1 = require("express");
const post_controller_1 = require("../controllers/post.controller");
const postRoute = () => {
    const router = express_1.Router();
    router.post('/posts', post_controller_1.createPost);
    router.get('/posts', post_controller_1.getAllPosts);
    router.get('/posts/:id', post_controller_1.getPost);
    router.patch('/posts/:id', post_controller_1.updatePost);
    router.delete('/posts/:id', post_controller_1.deletePost);
    return router;
};
exports.postRoute = postRoute;
