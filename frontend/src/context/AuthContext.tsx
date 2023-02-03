import { createContext } from "react";
import { IUser } from "../interfaces/User";

export type AuthContextData = {
  authenticated: boolean;
  isLoading: boolean;
  user: IUser | null;
  signIn: (user: IUser) => Promise<void>;
  register: (user: IUser) => Promise<void>;
  changePassword: (props: any) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextData>(null!);
