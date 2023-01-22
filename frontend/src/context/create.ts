import { createContext } from "react";

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default AuthContext;
