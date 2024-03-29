import { ReactNode, useEffect, useState } from "react";
import { IUser } from "../interfaces/User";
import api from "../services/api";
import { AuthContext } from "./AuthContext";

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState(false);

  const register = async (user: IUser) => {
    setIsLoading(true);
    try {
      // chamada a api para registrar o usuário
      const response = await api.post("/auth/register", user);
      setUser(response.data);
      authUser(response.data);
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
      const response = await api.post("/auth/login", user);
      setUser(response.data);
      authUser(response.data);
    } catch (error: any) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = () => {
    setUser(null);
    setAuthenticated(false);
    localStorage.removeItem("token");
  };

  const changePassword = async ({
    token,
    password,
  }: {
    token: string;
    password: string;
  }) => {
    setIsLoading(true);
    try {
      // chamada a api para registrar o usuário
      const response = await api.post(`reset-password/${token}`, password);
      setUser(response.data);
      authUser(response.data);
    } catch (error: any) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  async function authUser(data: any) {
    setAuthenticated(true);
    localStorage.setItem("token", JSON.stringify(data.token));
  }

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        authenticated,
        user,
        register,
        signIn,
        signOut,
        changePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
