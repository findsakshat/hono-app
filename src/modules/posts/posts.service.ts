import { AppHTTPException } from "../../utils/app-http-exception";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

async function fetchPosts() {
  const response = await fetch(`${API_BASE_URL}/posts`);

  if (!response.ok) {
    throw new AppHTTPException(response.status, {
      message: "Something went wrong",
    });
  }

  const data = await response.json();

  return data;
}

async function fetchPostById(id: string) {
  const response = await fetch(`${API_BASE_URL}/posts/${id}`);

  if (!response.ok) {
    throw new AppHTTPException(response.status, {
      message: "Something went wrong",
    });
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
    throw new AppHTTPException(response.status, {
      message: "Something went wrong",
    });
  }

  const data = await response.json();

  return data;
}

export { fetchPosts, fetchPostById, createPostByUserId };
