const mongoose =require ('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/Invest");



const paymentSchema = new mongoose.Schema({
    name: String,
    email: String,
    cardNumber: Number,
    amount: Number,
  });
  module.exports =mongoose.model('Payment',paymentSchema);