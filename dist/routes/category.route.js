"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoute = void 0;
const express_1 = require("express");
const category_controller_1 = require("../controllers/category.controller");
const categoryRoute = () => {
    const router = express_1.Router();
    router.post('/category', category_controller_1.createCategory);
    router.get('/category', category_controller_1.getAllCategory);
    router.get('/category/:id', category_controller_1.getCategory);
    router.patch('/category/:id', category_controller_1.updateCategory);
    router.delete('/category/:id', category_controller_1.deleteCategory);
    return router;
};
exports.categoryRoute = categoryRoute;
