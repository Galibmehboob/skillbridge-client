export interface AdminUser {
  _id: string;
  name: string;
  email: string;
  image?: string;
  role?: string;
  status?: string;
}


export interface AdminStats {
  totalUsers:number;
  blockedUsers:number;
  totalSkills:number;
  totalRequests:number;
  pendingRequests:number;
}