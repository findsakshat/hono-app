import type { Context } from "hono";
import { AppHTTPException } from "../../utils/app-http-exception";
import * as service from "./posts.service";

export async function getPosts(c: Context) {
	const posts = await service.fetchPosts();

	return c.json(
		{ data: { posts }, message: "Posts fetched successfully" },
		200,
	);
}

export async function getPost(c: Context) {
	const id = c.req.param("id");

	if (!id) {
		throw new AppHTTPException(400, { message: "Provide a valid post id" });
	}

	const post = await service.fetchPostById(id);

	return c.json({ data: { post }, message: "Post fetched successfully" }, 200);
}

export async function createPost(c: Context) {
	const { userId, title, body } = await c.req.json();

	if (!userId || !title || !body) {
		throw new AppHTTPException(400, {
			message: "Provide all the required fields",
		});
	}

	const post = await service.createPostByUserId({
		userId,
		title,
		body,
	});

	return c.json({ data: { post }, message: "Post fetched successfully" }, 200);
}
