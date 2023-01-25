import { ReactNode, useState } from "react";
import { IUser } from "../interfaces/User";
import api from "../services/api";
import { AuthContext } from "./create";

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [signed, setsigned] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const register = async (user: IUser) => {
    setIsLoading(true);
    try {
      // chamada a api para registrar o usuário
      const response = await api.post("/users", user);
      setUser(response.data);
    } catch (error: any) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async (user: IUser) => {
    setIsLoading(true);
    try {
      // chamada a api para logar o usuário
      const response = await api.post("/login", user);
      setUser(response.data);
    } catch (error: any) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        signed,
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
