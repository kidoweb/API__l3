import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export async function getUsers(): Promise<User[]> {
  const response = await axios.get<User[]>(`${API_BASE_URL}/users`);
  return response.data;
}

export async function getUserComments(userId: string): Promise<Comment[]> {
  const response = await axios.get<Comment[]>(`${API_BASE_URL}/comments`, {
    params: { postId: userId, _limit: 15 },
  });
  return response.data;
}

