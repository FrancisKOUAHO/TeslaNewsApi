const articleResponse = {
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

const articleNotFound = {
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

const invalidArticleData = {
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

const createArticleBody = {
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

const updateArticleBody = {
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

const createArticle = {
  tags: ['Articles'],
  description: 'Create a new article in the system',
  operationId: 'createArticle',
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
    '422': invalidArticleData,
    '500': internalServerError,
  },
};

const getAllArticles = {
  tags: ['Articles'],
  description: 'Retrieve all the users',
  operationId: 'getAllArticles',
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    '200': {
      description: 'articles retrieved successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              type: 'object',
              properties: articleResponse,
            },
          },
        },
      },
    },
    '500': internalServerError,
  },
};

const getArticle = {
  tags: ['Articles'],
  description: 'Retrieve one user',
  operationId: 'getArticle',
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
            properties: articleResponse,
          },
        },
      },
    },
    '404': articleNotFound,
    '500': internalServerError,
  },
};

const updateArticle = {
  tags: ['Articles'],
  description: 'Update a article',
  operationId: 'updateArticle',
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
            properties: articleResponse,
          },
        },
      },
    },
    '404': articleNotFound,
    '422': invalidArticleData,
    '500': internalServerError,
  },
};

const deleteArticle = {
  tags: ['Articles'],
  description: 'Delete a Article',
  operationId: 'deleteArticle',
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

export { createArticle, deleteArticle, getAllArticles, getArticle, updateArticle };
