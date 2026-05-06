import { Hono } from "hono";
import * as PostsController from "./posts.controller";

const router = new Hono();

router.get("/", PostsController.getPosts);
router.get("/:id", PostsController.getPost);

router.post("/", PostsController.createPost);

export { router as postsRouter };
