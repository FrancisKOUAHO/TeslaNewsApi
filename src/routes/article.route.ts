import { Router } from 'express';
import { createArticle, deleteArticle, getAllArticles, getArticle, updateArticle } from '../controllers/article.controller';

const articleRoute = () => {
  const router = Router();

  router.post('/articles', createArticle);

  router.get('/articles', getAllArticles);

  router.get('/articles/:id', getArticle);

  router.patch('/articles/:id', updateArticle);

  router.delete('/articles/:id', deleteArticle);

  return router;
};

export { articleRoute };
