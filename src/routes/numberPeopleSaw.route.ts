import { Router } from 'express';
import { getAllNumberPeopleSaw } from '../controllers/numberPeopleSaw.controller';

const NumberPeopleSawRoute = () => {
    const router = Router();

    router.get('/tags', getAllNumberPeopleSaw);

    return router;
};

export { NumberPeopleSawRoute };
