import { HTTPException } from "hono/http-exception";
import type { ContentfulStatusCode } from "hono/utils/http-status";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

async function fetchPosts() {
  const response = await fetch(`${API_BASE_URL}/posts`);

  if (!response.ok) {
    const status = response.status as ContentfulStatusCode;
    throw new HTTPException(status, { message: response.statusText });
  }

  const data = await response.json();

  return data;
}

async function fetchPostById(id: string) {
  const response = await fetch(`${API_BASE_URL}/posts/${id}`);

  if (!response.ok) {
    const status = response.status as ContentfulStatusCode;
    throw new HTTPException(status, { message: response.statusText });
  }

  const data = await response.json();

  return data;
}

type CreatePostPayload = {
  userId: number;
  title: string;
  body: string;
};

async function createPostByUserId({ userId, title, body }: CreatePostPayload) {
  const response = await fetch(`${API_BASE_URL}/posts`, {
    method: "POST",
    body: JSON.stringify({
      userId,
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const status = response.status as ContentfulStatusCode;
    throw new HTTPException(status, { message: response.statusText });
  }

  const data = await response.json();

  return data;
}

export { fetchPosts, fetchPostById, createPostByUserId };
