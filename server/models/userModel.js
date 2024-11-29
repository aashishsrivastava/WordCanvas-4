import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  creditBalance: { type: Number, default: 5 },
});

// using the schema(userSchema) here we create a model(userModel) with the name user("user"). this will try to create a ussermodel again and again

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;

// by using this usermodel user can create an account user can login into existing account and user can log out from the account 