import {Router} from "express";
import { signInController, logInController } from "../controllers/user.controller.js";

const UserRouter = Router();

UserRouter.post('/signin',signInController);
UserRouter.post('/login',logInController);

export default UserRouter;