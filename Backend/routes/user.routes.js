import {Router} from "express";
import { signInController } from "../controllers/user.controller.js";

const UserRouter = Router();

UserRouter.post('/signin',signInController);

export default UserRouter;