"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiDocumentation = void 0;
const users_1 = require("./users");
const roles_1 = require("./roles");
const posts_1 = require("./posts");
const category_1 = require("./category");
const apiDocumentation = {
    openapi: "3.0.1",
    info: {
        version: "0.0.1",
        title: "Tesla News - high tech",
        description: "Bonjour à tous et bienvenue sur Tesla News, l'API qui vous tient au courant des dernières actus de Tesla, d'Elon Musk, de SpaceX et de plein d'autres sujets hyper cool.",
        contact: {
            name: "Francis KOUAHO && Truong Jacky",
            email: "kouahofrancis@gmail.com"
        },
        /*license: {
          name: "Apache 2.0",
          url: "https://www.apache.org/licenses/LICENSE-2.0.html"
        }*/
    },
    servers: [
        {
            url: "http://localhost:4500/",
            description: "Local Server"
        }
    ],
    tags: [
        {
            name: "Roles"
        },
        {
            name: "Users"
        },
        {
            name: "Posts"
        }
    ],
    paths: {
        users: {
            post: users_1.createUser,
            get: users_1.getUsers
        },
        "users/{id}": {
            delete: users_1.deleteUser,
            get: users_1.getUser,
            patch: users_1.updateUser
        },
        roles: {
            post: roles_1.createRole,
            get: roles_1.getRoles
        },
        "roles/{id}": {
            delete: roles_1.deleteRole,
            get: roles_1.getRole,
            put: roles_1.updateRole
        },
        posts: {
            post: posts_1.createPost,
            get: posts_1.getAllPosts
        },
        "posts/{id}": {
            delete: posts_1.deletePost,
            get: posts_1.getPost,
            patch: posts_1.updatePost
        },
        category: {
            post: category_1.createCategory,
            get: category_1.getAllCategory
        },
        "category/{id}": {
            delete: category_1.deleteCategory,
            get: category_1.getCategory,
            patch: category_1.updateCategory
        }
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT"
            }
        },
        schemas: {
            createUserBody: users_1.createUserBody,
            updateUserBody: users_1.updateUserBody,
            createOrUpdateRoleBody: roles_1.createOrUpdateRoleBody
        }
    }
};
exports.apiDocumentation = apiDocumentation;
