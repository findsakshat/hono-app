import type { Context } from "hono";

function getUser(c: Context) {
  const user = {
    id: "b22dd5fa-c873-4d88-811b-657d2e426a3a",
    firstName: "Kakashi",
    lastName: "Hatake",
    email: "kakashi@gmail.com",
    isEmailVerified: true,
  };

  return c.json(
    {
      data: { user },
      isError: false,
      message: "User details fetched successfully",
    },
    200,
  );
}

function getUsers(c: Context) {
  const users = [
    {
      id: "b22dd5fa-c873-4d88-811b-657d2e426a3a",
      firstName: "Naruto",
      lastName: "Uzumaki",
      email: "naruto@gmail.com",
      isEmailVerified: true,
    },
    {
      id: "b22dd5fa-c873-4d88-811b-657d2e426a3a",
      firstName: "Kakashi",
      lastName: "Hatake",
      email: "kakashi@gmail.com",
      isEmailVerified: true,
    },
  ];

  return c.json(
    {
      data: { users },
      isError: false,
      message: "User details fetched successfully",
    },
    200,
  );
}

export { getUser, getUsers };
