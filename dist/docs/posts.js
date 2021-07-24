"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePost = exports.getPost = exports.getAllPosts = exports.deletePost = exports.createPost = void 0;
const postResponseWithRole = {
    _id: {
        type: 'string',
        example: '60564fcb544047cdc3844818',
    },
    title: {
        type: 'string',
        example: 'John Snow',
    },
    metaTitle: {
        type: 'string',
        example: 'john.snow@email.com',
    },
    slug: {
        type: 'string',
        example: '442893aba778ab321dc151d9b1ad98c64ed56c07f8cbaed',
    },
    summary: {
        type: 'string',
        example: '442893aba778ab321dc151d9b1ad98c64ed56c07f',
    },
    published: {
        type: 'string',
        example: "23/08/2021",
    },
    publishedAt: {
        type: 'string',
        example: "23/08/2021",
    },
    content: {
        type: 'string',
        example: '442893aba778ab321dc151d9b1ad98c64ed56c',
    },
    createdAt: {
        type: 'string',
        example: '2021-03-20T19:40:59.495Z',
    },
    updatedAt: {
        type: 'string',
        example: '2021-03-20T21:23:10.879Z',
    },
};
const internalServerError = {
    description: 'Internal Server Error',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        example: 'Internal Server Error',
                    },
                },
            },
        },
    },
};
const postNotFound = {
    description: 'Resource not found',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        example: 'post with id: "71675fcb655047cdc4955" not found',
                    },
                },
            },
        },
    },
};
const invalidPostData = {
    description: 'Invalid Data provided',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        example: 'The fields field1, field2 and field3 are required',
                    },
                },
            },
        },
    },
};
const security = [
    {
        bearerAuth: [],
    },
];
const createPostBody = {
    type: 'object',
    properties: {
        _id: {
            type: 'string',
            example: '60564fcb544047cdc3844818',
        },
        title: {
            type: 'string',
            example: 'John Snow',
        },
        metaTitle: {
            type: 'string',
            example: 'john.snow@email.com',
        },
        slug: {
            type: 'string',
            example: '442893aba778ab321dc151d9b1ad98c64ed56c07f8cbaed',
        },
        summary: {
            type: 'string',
            example: '442893aba778ab321dc151d9b1ad98c64ed56c07f',
        },
        published: {
            type: 'string',
            example: "23/08/2021",
        },
        publishedAt: {
            type: 'string',
            example: "23/08/2021",
        },
        content: {
            type: 'string',
            example: '442893aba778ab321dc151d9b1ad98c64ed56c',
        },
        createdAt: {
            type: 'string',
            example: '2021-03-20T19:40:59.495Z',
        },
        updatedAt: {
            type: 'string',
            example: '2021-03-20T21:23:10.879Z',
        },
    },
};
const updatePostBody = {
    type: 'object',
    properties: {
        _id: {
            type: 'string',
            example: '60564fcb544047cdc3844818',
        },
        title: {
            type: 'string',
            example: 'John Snow',
        },
        metaTitle: {
            type: 'string',
            example: 'john.snow@email.com',
        },
        slug: {
            type: 'string',
            example: '442893aba778ab321dc151d9b1ad98c64ed56c07f8cbaed',
        },
        summary: {
            type: 'string',
            example: '442893aba778ab321dc151d9b1ad98c64ed56c07f',
        },
        published: {
            type: 'string',
            example: "23/08/2021",
        },
        publishedAt: {
            type: 'string',
            example: "23/08/2021",
        },
        content: {
            type: 'string',
            example: '442893aba778ab321dc151d9b1ad98c64ed56c',
        },
    },
};
const createPost = {
    tags: ['Posts'],
    description: 'Create a new post in the system',
    operationId: 'createPost',
    security: [
        {
            bearerAuth: [],
        },
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/createUserBody',
                },
            },
        },
        required: true,
    },
    responses: {
        '201': {
            description: 'User created successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            _id: {
                                type: 'string',
                                example: '60564fcb544047cdc3844818',
                            },
                            title: {
                                type: 'string',
                                example: 'John Snow',
                            },
                            metaTitle: {
                                type: 'string',
                                example: 'john.snow@email.com',
                            },
                            slug: {
                                type: 'string',
                                example: '442893aba778ab321dc151d9b1ad98c64ed56c07f8cbaed',
                            },
                            summary: {
                                type: 'string',
                                example: '442893aba778ab321dc151d9b1ad98c64ed56c07f',
                            },
                            published: {
                                type: 'string',
                                example: "23/08/2021",
                            },
                            publishedAt: {
                                type: 'string',
                                example: "23/08/2021",
                            },
                            content: {
                                type: 'string',
                                example: '442893aba778ab321dc151d9b1ad98c64ed56c',
                            },
                            createdAt: {
                                type: 'string',
                                example: '2021-03-20T19:40:59.495Z',
                            },
                            updatedAt: {
                                type: 'string',
                                example: '2021-03-20T21:23:10.879Z',
                            },
                        },
                    },
                },
            },
        },
        '422': invalidPostData,
        '500': internalServerError,
    },
};
exports.createPost = createPost;
const getAllPosts = {
    tags: ['Posts'],
    description: 'Retrieve all the users',
    operationId: 'getAllPosts',
    security: [
        {
            bearerAuth: [],
        },
    ],
    responses: {
        '200': {
            description: 'posts retrieved successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: postResponseWithRole,
                        },
                    },
                },
            },
        },
        '500': internalServerError,
    },
};
exports.getAllPosts = getAllPosts;
const getPost = {
    tags: ['Posts'],
    description: 'Retrieve one user',
    operationId: 'getPost',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'User ID',
            required: true,
            type: 'string',
        },
    ],
    responses: {
        '200': {
            description: 'User retrieved successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: postResponseWithRole,
                    },
                },
            },
        },
        '404': postNotFound,
        '500': internalServerError,
    },
};
exports.getPost = getPost;
const updatePost = {
    tags: ['Posts'],
    description: 'Update a post',
    operationId: 'updatePost',
    security,
    parameters: [
        {
            id: "string",
            title: "string",
            metaTitle: "string",
            slug: "string",
            summary: "string",
            published: "number",
            publishedAt: "number",
            content: "string",
        },
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/updateUserBody',
                },
            },
        },
        required: true,
    },
    responses: {
        '200': {
            description: 'User retrieved successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: postResponseWithRole,
                    },
                },
            },
        },
        '404': postNotFound,
        '422': invalidPostData,
        '500': internalServerError,
    },
};
exports.updatePost = updatePost;
const deletePost = {
    tags: ['Posts'],
    description: 'Delete a post',
    operationId: 'deletePost',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            id: "string",
            title: "string",
            metaTitle: "string",
            slug: "string",
            summary: "string",
            published: "number",
            publishedAt: "number",
            content: "string",
        },
    ],
    responses: {
        '200': {
            description: 'post deleted successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'post deleted successfully!',
                            },
                        },
                    },
                },
            },
        },
        '500': {
            description: 'Internal Server Error',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'Internal Server Error',
                            },
                        },
                    },
                },
            },
        },
    },
};
exports.deletePost = deletePost;
