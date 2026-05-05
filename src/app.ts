import { Hono } from "hono";

export class App {
  private app: Hono;

  constructor() {
    this.app = new Hono();
    this.registerRoutes();
  }

  private registerRoutes() {}

  public serve() {
    return Bun.serve({
      port: process.env.PORT ?? 8080,
      fetch: this.app.fetch,
    });
  }
}
