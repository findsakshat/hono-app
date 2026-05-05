import { Hono } from "hono";
import * as UsersController from "./users.controller";

const usersRouter = new Hono();

usersRouter.get("/", UsersController.getUsers);
usersRouter.get("/:id", UsersController.getUser);

export { usersRouter };
