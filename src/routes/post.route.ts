import { Router } from 'express';
import { createPost, deletePost, getAllPosts, getPost, updatePost } from '../controllers/post.controller';

const postRoute = () => {
  const router = Router();

  router.post('/posts', createPost);

  router.get('/posts', getAllPosts);

  router.get('/posts/:id', getPost);

  router.patch('/posts/:id', updatePost);

  router.delete('/posts/:id', deletePost);

  return router;
};

export { postRoute };
