import type { Hono } from "hono";
import { usersRouter } from "./modules/users/users.router";

type RouteConfig = {
  path: string;
  router: Hono;
};

const routes: RouteConfig[] = [{ path: "/users", router: usersRouter }];

export { routes };
