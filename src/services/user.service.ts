const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export type UpdateProfilePayload = {
  name?: string;
  image?: string;
  bio?: string;
  location?: string;
  github?: string;
  linkedin?: string;
  portfolio?: string;
  skills?: string[];
};

export const getMyProfile = async () => {
  const res = await fetch(`${BASE_URL}/api/users/me`, {
    credentials: "include",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch profile");
  }

  return data.data;
};





export const updateMyProfile = async (
  payload: UpdateProfilePayload
) => {
  const res = await fetch(`${BASE_URL}/api/users/me`, {
    method: "PATCH",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to update profile");
  }

  return data.data;
};

export const getUsers = async ({
  search = "",
  skill = "",
  page = 1,
}: {
  search?: string;
  skill?: string;
  page?: number;
}) => {
  const params = new URLSearchParams({
    search,
    skill,
    page: page.toString(),
    limit: "9",
  });

  const res = await fetch(
    `${BASE_URL}/api/users?${params.toString()}`
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data.message || "Failed to fetch users"
    );
  }

  return data;
};

export const getUser = async (id: string) => {
  const res = await fetch(
    `${BASE_URL}/api/users/${id}`
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data.data;
};

