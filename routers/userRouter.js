import express from "express";
import {changePassword, editProfile, userDetail} from "../controller/userController";
import routes from "../routes";

//라우터를이용해 쪼갤수 있다.
const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export  default userRouter;
