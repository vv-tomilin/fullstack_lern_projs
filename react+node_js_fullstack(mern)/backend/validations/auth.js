import { body } from 'express-validator';

export const registerValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен быть длинее 5 символов').isLength({ min: 5 }),
  body('fullName', 'Имя должно быть длинее 3 симолов').isLength({ min: 3 }),
  body('avatarUrl', 'Неверный формат ссылки').optional().isURL(),
];
