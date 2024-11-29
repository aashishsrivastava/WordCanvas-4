import express from "express";
import {
  registerUser,
  loginUser,
  userCredits,
  paymentRazorpay,
  verifyRazorpay,
} from "../controllers/userController.js";

import userAuth from "../middlewares/auth.js";

const userRouter = express.Router();

// API end point
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/credits", userAuth, userCredits);
userRouter.post("/pay-razor", userAuth, paymentRazorpay);
userRouter.post("/verify-razor", verifyRazorpay);

export default userRouter;

// localhost:4000/api/user/register
// executes registeruser controller function

// localhost:4000/api/user/loginUser
// executes loginUser controller function

// to test these apis we need one tool POSTMAN
