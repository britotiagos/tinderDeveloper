import axios from 'axios';
import Dev from '../model/Dev.js';
import { AppError } from '../utils/AppError.js';

class DevController {
  async index(req, res, next) {
    try {
      const { user } = req.headers;

      if (!user) {
        throw new AppError('User ID is required in headers', 400);
      }

      const loggedDev = await Dev.findById(user);
      if (!loggedDev) {
        throw new AppError('User not found', 404);
      }

      const users = await Dev.find({
        $and: [
          { _id: { $ne: user } },
          { _id: { $nin: loggedDev.likes } },
          { _id: { $nin: loggedDev.dislikes } }
        ]
      }).select('name bio avatar user profileUrl');

      return res.json(users);
    } catch (error) {
      next(error);
    }
  }

  async store(req, res, next) {
    try {
      const { username } = req.body;

      if (!username) {
        throw new AppError('Github username is required', 400);
      }

      // Convert to lowercase for consistency
      const normalizedUsername = username.toLowerCase();

      // Check if user already exists
      const userExists = await Dev.findOne({ user: normalizedUsername });
      if (userExists) {
        return res.json(userExists);
      }

      try {
        const response = await axios.get(
          `https://api.github.com/users/${normalizedUsername}`,
          {
            headers: process.env.GITHUB_TOKEN ? {
              Authorization: `token ${process.env.GITHUB_TOKEN}`
            } : {}
          }
        );

        const { name, bio, avatar_url: avatar } = response.data;

        const dev = await Dev.create({
          name: name || normalizedUsername,
          user: normalizedUsername,
          bio: bio || '',
          avatar
        });

        return res.status(201).json(dev);
      } catch (githubError) {
        if (githubError.response?.status === 404) {
          throw new AppError('Github user not found', 404);
        }
        throw new AppError('Error fetching Github user data', 500);
      }
    } catch (error) {
      next(error);
    }
  }
}

export default new DevController();
