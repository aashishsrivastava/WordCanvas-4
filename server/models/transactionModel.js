import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  plan: { type: String, required: true },
  amount: { type: Number, required: true },
  credits: { type: Number, required: true },
  payment: { type: Boolean, default: false },
  date: { type: Number },
  //   date: { type: Number, default: Date.now },
});

// here we have created a transactionSchema and using this schema we have created  the transactionModel and the transactionModel is exported from this file (export default transactionModel;) so we can access this transaction model in any file and we can store the data using this transactionModel .....

const transactionModel =
  mongoose.models.transaction ||
  mongoose.model("transaction", transactionSchema);

export default transactionModel;
