import { createContext } from "react";
import { IUser } from "../interfaces/User";

export type AuthContextData = {
  signed: boolean;
  user: IUser | null;
  signIn: (user: IUser) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextData>(null!);
