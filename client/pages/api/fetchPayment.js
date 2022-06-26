import axios from '../../axios.js';
export const fetchPayment = async (props) => {
  try {
    await axios.post(
      '/payment/create',
      {
        cardNumber: Number(props.values.cardNumber.replace(/\s+/g, '')),
        expirationDate: props.values.expirationDate,
        cvv: props.values.cvv,
        amount: props.values.amount,
      },
      { headers: { 'Content-Type': 'application/json' } },
    );
  } catch (error) {
    console.error('The card is already registered or there is a problem with the server', error);
  }
};
