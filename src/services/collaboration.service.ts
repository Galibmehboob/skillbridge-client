const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const sendCollaborationRequest = async (
  receiverId: string
) => {
  const res = await fetch(
    `${BASE_URL}/api/collaborations/request`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        receiverId,
      }),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data.message || "Failed to send request"
    );
  }

  return data;
};

export const getReceivedRequests = async () => {
  const res = await fetch(
    `${BASE_URL}/api/collaborations/received`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data.message || "Failed to fetch requests"
    );
  }

  return data;
};

export const updateRequest = async (
  id: string,
  status: "accepted" | "rejected"
) => {
  const res = await fetch(
    `${BASE_URL}/api/collaborations/${id}`,
    {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status,
      }),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data.message || "Failed to update request"
    );
  }

  return data;
};