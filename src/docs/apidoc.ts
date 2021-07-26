import {createUser, createUserBody, deleteUser, getUser, getUsers, updateUser, updateUserBody} from "./users";
import {createOrUpdateRoleBody, createRole, deleteRole, getRole, getRoles, updateRole} from "./roles";
import {createArticle, deleteArticle, getAllArticles, getArticle, updateArticle} from "./articles";
import {createCategory, getAllCategory, getCategory, updateCategory, deleteCategory} from "./category"


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
    },
    servers: [
        {
            url: "http://localhost:4500/",
            description: "Local Server"
        }
    ],
    tags: [
        {
            name: "Category"
        },
        {
            name: "Articles"
        },
        {
            name: "Users"
        },
        {
            name: "Roles"
        }
    ],
    paths: {
        category: {
            post: createCategory,
            get: getAllCategory
        },
        "category/{id}": {
            delete: deleteCategory,
            get: getCategory,
            patch: updateCategory
        },
        articles: {
            post: createArticle,
            get: getAllArticles
        },
        "articles/{id}": {
            delete: deleteArticle,
            get: getArticle,
            patch: updateArticle
        },
        users: {
            post: createUser,
            get: getUsers
        },
        "users/{id}": {
            delete: deleteUser,
            get: getUser,
            patch: updateUser
        },
        roles: {
            post: createRole,
            get: getRoles
        },
        "roles/{id}": {
            delete: deleteRole,
            get: getRole,
            put: updateRole
        },

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
            createUserBody,
            updateUserBody,
            createOrUpdateRoleBody
        }
    }
};

export {apiDocumentation};
