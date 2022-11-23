export type UserState = {
  auth: {
    isAuthenticated: boolean;
    token: string | null;
  };
  message: string;
};
