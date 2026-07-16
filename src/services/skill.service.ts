const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export interface AddSkillPayload {
  category: string;
  title: string;
  level: string;
  hourlyRate: number;
  shortDescription: string;
  description: string;
  portfolio: string;
  liveProject: string;
  github: string;
  technologies: string[];
  availability: "Available" | "Busy" | "Unavailable";
}

export const addSkill = async (
  payload: AddSkillPayload
) => {
  const res = await fetch(
    `${BASE_URL}/api/skills`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data.message || "Failed to add skill"
    );
  }

  return data;
};

export const getMySkills = async () => {
  const res = await fetch(
    `${BASE_URL}/api/skills/me`,
    {
      credentials: "include",
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data.message || "Failed to load skills"
    );
  }

  return data;
};

export const deleteSkill = async (
  id: string
) => {
  const res = await fetch(
    `${BASE_URL}/api/skills/${id}`,
    {
      method: "DELETE",
      credentials: "include",
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data.message || "Delete failed"
    );
  }

  return data;
};

export const getAllSkills = async () => {
  const res = await fetch(
    `${BASE_URL}/api/skills`,
    {
      credentials: "include",
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
};