import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { trimTrailingSlash } from "hono/trailing-slash";
import { routes } from "./routes";

const app = new Hono();

app.use(trimTrailingSlash());

routes.forEach(({ path, router }) => {
  app.basePath("/api").route(path, router);
});

app.get("/api/health", (c) => {
  return c.json({ message: "Healthy 🔥" }, 200);
});

app.onError((error, c) => {
  if (error instanceof HTTPException) {
    return c.json({ message: error.message }, error.status);
  }

  // oxlint-disable-next-line no-console
  console.error("Error::", error);
  return c.json({ message: "Internal server error" }, 500);
});

export { app };
