import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import { validationResult } from 'express-validator';

import PaymentModel from './models/Payment.js';
import { createValidator } from './validations/payment.js';

const PORT = process.env.PORT || 7878;
const DB_HOST = process.env.DB_HOST;

mongoose
  .connect(DB_HOST)
  .then(() => console.log('Connect to DB'))
  .catch(() => console.log('Problem with connect to DB'));

const app = express();
app.use(cors());
app.use(express.json({ extended: true }));

app.get('/payment', async (req, res) => {
  try {
    const payments = await PaymentModel.find();
    res.json(payments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Can't get payments" });
  }
});

app.post('/payment/create', createValidator, async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const doc = new PaymentModel({
      cardNumber: req.body.cardNumber,
      expirationDate: req.body.expirationDate,
      cvv: req.body.cvv,
      amount: req.body.amount,
    });
    const payment = await doc.save();

    res.json({
      requestId: payment.id,
      amount: payment.amount,
    });
  } catch (error) {
    console.errror(errror);
    res.status(500).json({ message: 'Problem with create payment' });
  }
});

app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  }
  console.log(`Server is run on ${PORT}`);
});
