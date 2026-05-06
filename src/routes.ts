import type { Hono } from "hono";
import { postsRouter } from "./modules/posts/posts.router";

type RouteConfig = {
  path: string;
  router: Hono;
};

const routes: RouteConfig[] = [{ path: "/posts", router: postsRouter }];

export { routes };
