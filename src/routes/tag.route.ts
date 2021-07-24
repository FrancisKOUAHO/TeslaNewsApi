import { Router } from 'express';
import { createTag, deleteTag, getAllTags, getTag, updateTag } from '../controllers/tag.controller';

const tagRoute = () => {
  const router = Router();

  router.post('/tags', createTag);

  router.get('/tags', getAllTags);

  router.get('/tags/:id', getTag);

  router.patch('/tags/:id', updateTag);

  router.delete('/tags/:id', deleteTag);

  return router;
};

export { tagRoute };
