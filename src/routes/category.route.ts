import { Router } from 'express';
import { createCategory, getAllCategory, getCategory, updateCategory, deleteCategory } from '../controllers/category.controller';

const categoryRoute = () => {
  const router = Router();

  router.post('/category', createCategory);

  router.get('/category', getAllCategory);

  router.get('/category/:id', getCategory);

  router.patch('/category/:id', updateCategory);

  router.delete('/category/:id', deleteCategory);

  return router;
};

export { categoryRoute };
