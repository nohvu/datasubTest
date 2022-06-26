import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  cardNumber: yup
    .string()
    .required('Required')
    .test('len', 'Incorrect', (val) => val && val.toString().length === 19),
  expirationDate: yup
    .string()
    .required('Required')
    .test(
      'len',
      'Correct format (MM/YYYY)',
      (val) =>
        val &&
        val.length === 7 &&
        val.match(/((0[1-9])|(1[0-2]))\/[2-9](([1-9]\d\d)|(02[2-9])|(0[3-9]\d))/),
    ),
  cvv: yup
    .number()
    .required('Required')
    .test('len', 'Incorrect', (val) => val && val.toString().length === 3),
  amount: yup.number().required('Required'),
});
