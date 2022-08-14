import { body } from 'express-validator';

export const loginValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен быть длинее 5 символов').isLength({ min: 5 }),
];

export const registerValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен быть длинее 5 символов').isLength({ min: 5 }),
  body('fullName', 'Имя должно быть длинее 3 симолов').isLength({ min: 3 }),
  body('avatarUrl', 'Неверный формат ссылки').optional().isURL(),
];

export const postCreateValidation = [
  body('title', 'Введите заголовок статьи').isLength({ min: 3 }).isString(),
  body('text', 'Введите текст стстьи').isLength({ min: 10 }).isString(),
  body('tags', 'Неверный формат тегов (укажите массив)').optional().isArray(),
  body('imageUrl', 'Некорректная ссылка на изображение').optional().isURL(),
];
