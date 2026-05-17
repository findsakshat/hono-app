import { app } from "./app";

const server = Bun.serve({
	port: process.env.PORT ?? 8080,
	fetch: app.fetch,
});

// oxlint-disable-next-line no-console
console.log(`🟢 Server is up and running on:`, server.url.href);
