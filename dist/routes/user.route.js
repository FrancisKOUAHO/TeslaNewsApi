"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const userRoute = () => {
    const router = express_1.Router();
    router.post('/users', user_controller_1.createUser);
    router.get('/users', user_controller_1.getAllUsers);
    router.get('/users/:id', user_controller_1.getUser);
    router.patch('/users/:id', user_controller_1.updateUser);
    router.delete('/users/:id', user_controller_1.deleteUser);
    return router;
};
exports.userRoute = userRoute;
