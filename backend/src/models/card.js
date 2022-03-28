import mongoose from 'mongoose'

const { Schema, Types, model } = mongoose

const schema = new Schema({
  Cvv: { type: String, required: true },
  CardNumber: { type: String, required: true },
  ExpDate: { type: String, required: true },
  Amount: { type: Number, required: true },
})
//{ "CardNumber": '0000000000000000', ExpDate: '04/2022', Cvv: '123', Amount: 100 }
export default model('Card', schema)