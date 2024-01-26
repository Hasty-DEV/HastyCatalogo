import { User } from "../User/User.type";

export type AuthContextProps = {
  user: User | null | undefined;
  signed: boolean;
  signin: (email: string, password: string) => void | string;
  signup: (email: string, password: string) => void | string;
  signout: () => void;
};
