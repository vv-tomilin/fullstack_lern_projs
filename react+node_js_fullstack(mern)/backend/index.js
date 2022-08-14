import express from 'express';
import mongoose from 'mongoose';

import { registerValidation, loginValidation, postCreateValidation } from './validations.js';

import checkAuth from './utils/checkAuth.js';

import { register, login, getMe } from './controllers/UserController.js';
import { getAll, create, getOne, update, remove } from './controllers/PostController.js';

mongoose
  .connect(
    'mongodb+srv://user:wwwwww@cluster0.aa99cbe.mongodb.net/blog?retryWrites=true&w=majority'
  )
  .then(() => console.log('DB ok'))
  .catch((err) => console.error('DB error', err));

const app = express();

app.use(express.json());

app.post('/auth/login', loginValidation, login);
app.post('/auth/register', registerValidation, register);
app.get('/auth/me', checkAuth, getMe);

app.get('/posts', getAll);
app.get('/posts/:id', getOne);

app.post('/posts', checkAuth, postCreateValidation, create);
app.delete('/posts/:id', checkAuth, remove);
app.patch('/posts/:id', checkAuth, update);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('Server Ok');
});
