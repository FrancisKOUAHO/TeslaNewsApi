"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagRoute = void 0;
const express_1 = require("express");
const tag_controller_1 = require("../controllers/tag.controller");
const tagRoute = () => {
    const router = express_1.Router();
    router.post('/tags', tag_controller_1.createTag);
    router.get('/tags', tag_controller_1.getAllTags);
    router.get('/tags/:id', tag_controller_1.getTag);
    router.patch('/tags/:id', tag_controller_1.updateTag);
    router.delete('/tags/:id', tag_controller_1.deleteTag);
    return router;
};
exports.tagRoute = tagRoute;
