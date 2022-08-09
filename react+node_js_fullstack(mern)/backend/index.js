import express from 'express';
import mongoose from 'mongoose';

import { registerValidation } from './validations/auth.js';

import checkAuth from './utils/checkAuth.js';

import { register, login, getMe } from './controllers/UserController.js';

mongoose
  .connect(
    'mongodb+srv://user:wwwwww@cluster0.aa99cbe.mongodb.net/blog?retryWrites=true&w=majority'
  )
  .then(() => console.log('DB ok'))
  .catch((err) => console.error('DB error', err));

const app = express();

app.use(express.json());

app.post('/auth/login', login);

app.post('/auth/register', registerValidation, register);

app.post('/auth/me', checkAuth, getMe);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('Server Ok');
});
