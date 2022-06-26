import { body } from 'express-validator';

export const createValidator = [
  body('cardNumber', 'Номер карты должен состоять из 16 цифр')
    .isNumeric()
    .isLength({ min: 16, max: 16 }),
  body('expirationDate', 'Неверный формат даты (mm/yyyy)').isLength({ min: 7, max: 7 }),
  body('cvv', 'Пароль должен состоять из 3 цифр').isNumeric().isLength({ min: 3, max: 3 }),
  body('amount', 'Введите корректную сумму').isNumeric(),
];
