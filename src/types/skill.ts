export interface Skill {
  _id: string;
  userId: string;

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

  availability: string;

  createdAt: string;
}