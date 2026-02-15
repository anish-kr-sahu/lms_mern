import express from "express";
import { login, logout, signUp } from "../controller/authController";


const authRouter = express.Router();

authRouter.post("/signup",signUp);
authRouter.post("/login",login);
authRouter.get("/logout",logout);