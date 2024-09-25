// TODO: change the app to use camel case names from the server
export type User = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
};

export interface UserResponse {
  page: number;
  total: number;
  per_page: 6;
  total_pages: 2;
  data: User[];
}
