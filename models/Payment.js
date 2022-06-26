import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
  cardNumber: { type: String, required: true, unique: true },
  expirationDate: { type: String, required: true },
  cvv: { type: Number, required: true },
  amount: { type: Number, required: true },
});

export default mongoose.model('Payment', PaymentSchema);
