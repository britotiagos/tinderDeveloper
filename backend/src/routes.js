import { Router } from 'express';
import DevController from './controllers/DevController.js';
import LikeController from './controllers/LikeController.js';
import DislikeController from './controllers/DislikeController.js';

const router = Router();

// Dev routes
router.get('/devs', DevController.index);
router.post('/devs', DevController.store);

// Like/Dislike routes
router.post('/devs/:devId/likes', LikeController.store);
router.post('/devs/:devId/dislikes', DislikeController.store);

export default router;
