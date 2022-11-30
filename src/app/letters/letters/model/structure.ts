export interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostGroup {
  [key: number]: Post[];
}

