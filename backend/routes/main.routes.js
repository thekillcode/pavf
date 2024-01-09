import express from 'express';
import auth from '../middlewares/auth.js';
import { StatusCodes } from '../errors/ApiError.js';
import { roleSeeder } from '../database/seeders/seeder.js';
import {
  createSeederRole,
  createSeederUser,
} from '../services/seeder.service.js';

const mainRouter = new express.Router();

// Add routes
mainRouter.get('/', async (req, res) => {
  return res.json({
    message: 'Welcome to Api Server ',
  });
});

mainRouter.get('/seeder', async (req, res) => {
  const { password } = req.body;
  if (password === 'lord123!@#') {
    const roleData = [];
    roleData.push(await createSeederRole('Admin'));
    roleData.push(await createSeederRole('User'));

    const userData = [];
    userData.push(
      await createSeederUser({
        username: 'admin',
        email: 'admn@example.com',
        password: 'admin123!@#',
        role: 'admin',
      })
    );
    userData.push(
      await createSeederUser({
        username: 'user',
        email: 'user@example.com',
        password: 'user123!@#',
        role: 'user',
      })
    );

    return res.status(StatusCodes.CREATED).json({ roleData, userData });
  } else {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: 'Authenticated',
    });
  }
});

// routerName.post('/', SessionController.store);
// routerName.put('/', SessionController.store);
// routerName.delete('/', SessionController.store);

export default mainRouter;
