"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const postsSchema = new mongoose_1.Schema({
    title: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    metaTitle: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    slug: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    summary: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    published: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    publishedAt: {
        type: mongoose_1.Schema.Types.String,
        required: false,
    },
    content: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'category',
        required: true,
        index: true,
    },
    tag: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'tag',
        required: true,
        index: true,
    },
}, {
    collection: 'posts',
    timestamps: true,
});
const Post = mongoose_1.default.model('Post', postsSchema);
exports.Post = Post;
