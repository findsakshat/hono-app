import type { Context } from "hono";
import * as PostsService from "./posts.service";
import { HTTPException } from "hono/http-exception";

async function getPosts(c: Context) {
  const posts = await PostsService.fetchPosts();

  return c.json(
    { data: { posts }, message: "Posts fetched successfully" },
    200,
  );
}

async function getPost(c: Context) {
  const id = c.req.param("id");

  if (!id) {
    throw new HTTPException(400, { message: "Provide a valid post id" });
  }

  const post = await PostsService.fetchPostById(id);

  return c.json({ data: { post }, message: "Post fetched successfully" }, 200);
}

async function createPost(c: Context) {
  const { userId, title, body } = await c.req.json();

  if (!userId || !title || !body) {
    throw new HTTPException(400, { message: "Bad Request" });
  }

  const post = await PostsService.createPostByUserId({
    userId,
    title,
    body,
  });

  return c.json({ data: { post }, message: "Post fetched successfully" }, 200);
}

export { getPosts, getPost, createPost };
