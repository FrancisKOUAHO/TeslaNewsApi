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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getUser = exports.getAllUsers = exports.deleteUser = exports.createUser = void 0;
const crypto_1 = __importDefault(require("crypto"));
const user_model_1 = require("../models/user.model");
const hashPassword = (password) => {
    const salt = crypto_1.default.randomBytes(16).toString('hex');
    // Hashing salt and password with 100 iterations, 64 length and sha512 digest
    return crypto_1.default.pbkdf2Sync(password, salt, 100, 64, `sha512`).toString(`hex`);
};
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, enabled, fullName, password, role } = req.body;
    if (!email || !fullName || !password || !role) {
        return res.status(422).json({ message: 'The fields email, fullName, password and role are required' });
    }
    const userInput = {
        fullName,
        email,
        password: hashPassword(password),
        enabled,
        role,
    };
    const userCreated = yield user_model_1.User.create(userInput);
    return res.status(201).json({ data: userCreated });
});
exports.createUser = createUser;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.User.find().populate('role').sort('-createdAt').exec();
    return res.status(200).json({ data: users });
});
exports.getAllUsers = getAllUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_model_1.User.findOne({ _id: id }).populate('role').exec();
    if (!user) {
        return res.status(404).json({ message: `User with id "${id}" not found.` });
    }
    return res.status(200).json({ data: user });
});
exports.getUser = getUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { enabled, fullName, role } = req.body;
    const user = yield user_model_1.User.findOne({ _id: id });
    if (!user) {
        return res.status(404).json({ message: `User with id "${id}" not found.` });
    }
    if (!fullName || !role) {
        return res.status(422).json({ message: 'The fields fullName and role are required' });
    }
    yield user_model_1.User.updateOne({ _id: id }, { enabled, fullName, role });
    const userUpdated = yield user_model_1.User.findById(id);
    return res.status(200).json({ data: userUpdated });
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield user_model_1.User.findByIdAndDelete(id);
    return res.status(200).json({ message: 'User deleted successfully.' });
});
exports.deleteUser = deleteUser;
