import { Hono } from "hono";
import { trimTrailingSlash } from "hono/trailing-slash";
import { routes } from "./routes";
import { AppHTTPException } from "./utils/app-http-exception";

const app = new Hono();

app.use(trimTrailingSlash());

routes.forEach(({ path, router }) => {
	app.basePath("/api").route(path, router);
});

app.get("/api/health", (c) => {
	return c.json({ message: "Healthy 🔥" }, 200);
});

app.onError((error, c) => {
	if (error instanceof AppHTTPException) {
		return c.json(
			{
				statusText: error.statusText,
				success: error.success,
				message: error.message,
				data: error.data,
			},
			error.status,
		);
	}

	// oxlint-disable-next-line no-console
	console.error("Error::", error);
	return c.json(
		{
			success: false,
			statusText: "Internal Server Error",
			message: "Something went wrong",
		},
		500,
	);
});

export { app };
