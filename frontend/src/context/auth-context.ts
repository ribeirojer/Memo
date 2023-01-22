import { ReactNode, useContext, useState } from "react";
import { IUser } from "../interfaces/User";
import api from "../services/api";
import AuthContext from "./create";

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState(null);
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

  const login = async (user: IUser) => {
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

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext></AuthContext>
      value={{ user, isLoading, isError, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
