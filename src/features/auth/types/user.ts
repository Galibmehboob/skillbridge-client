export interface User {
  _id: string;
  userId: string;
  name: string;
  image?: string;
  bio?: string;
  location?: string;
  github?: string;
  linkedin?: string;
  portfolio?: string;
  skills?: string[];
}