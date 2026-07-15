export interface CollaborationUser {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export interface CollaborationRequest {
  _id: string;
  sender: CollaborationUser;
  receiver: CollaborationUser;
  status: "pending" | "accepted" | "rejected";
  createdAt: string;
}

export interface CollaborationResponse {
  success: boolean;
  data: CollaborationRequest[];
}