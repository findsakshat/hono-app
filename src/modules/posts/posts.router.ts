import { Hono } from "hono";
import * as controller from "./posts.controller";

const router = new Hono();

router.get("/", controller.getPosts);
router.get("/:id", controller.getPost);

router.post("/", controller.createPost);

export { router as postsRouter };
