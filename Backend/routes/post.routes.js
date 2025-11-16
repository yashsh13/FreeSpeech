import {Router} from "express";
import { getPosts, insertPost } from "../controllers/post.controller.js";
import auth from "../utils/auth.js";

const postRouter = Router();

postRouter.post('/insertpost',auth,insertPost);
postRouter.get('/getposts',auth,getPosts);

export default postRouter;