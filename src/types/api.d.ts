interface User {
  id: number;
  email: string;
  name: string;
  username: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  avatarColor?: string;
  avatarUrl?: string;
  backgroundUrl?: string;
  isSocialUser?: boolean;
}

type GetUsersResponse = User[];
