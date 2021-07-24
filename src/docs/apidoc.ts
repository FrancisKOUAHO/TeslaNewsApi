import { createUser, createUserBody, deleteUser, getUser, getUsers, updateUser, updateUserBody } from "./users";
import { createOrUpdateRoleBody, createRole, deleteRole, getRole, getRoles, updateRole } from "./roles";
import { createPost, deletePost, getAllPosts, getPost, updatePost } from "./posts";
import { createCategory, getAllCategory, getCategory, updateCategory, deleteCategory } from "./category"


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
    posts: {
      post: createPost,
      get: getAllPosts
    },
    "posts/{id}": {
      delete: deletePost,
      get: getPost,
      patch: updatePost
    },
    category: {
      post: createCategory,
      get: getAllCategory
    },
    "category/{id}": {
      delete: deleteCategory,
      get: getCategory,
      patch: updateCategory
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
      createUserBody,
      updateUserBody,
      createOrUpdateRoleBody
    }
  }
};

export { apiDocumentation };
