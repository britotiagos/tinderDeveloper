import Dev from '../model/Dev.js';
import { AppError } from '../utils/AppError.js';

class DislikeController {
  async store(req, res, next) {
    try {
      const { devId } = req.params;
      const { user } = req.headers;

      if (!user) {
        throw new AppError('User ID is required in headers', 400);
      }

      const loggedDev = await Dev.findById(user);
      if (!loggedDev) {
        throw new AppError('Logged user not found', 404);
      }

      const targetDev = await Dev.findById(devId);
      if (!targetDev) {
        throw new AppError('Target dev not found', 404);
      }

      // Add dislike if not already present
      if (!loggedDev.dislikes.includes(targetDev._id)) {
        loggedDev.dislikes.push(targetDev._id);
        await loggedDev.save();
      }

      return res.json({
        ok: true,
        dev: loggedDev
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new DislikeController();
