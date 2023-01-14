import axios from "axios";
import { useState, useEffect } from "react";
import { IUser } from "../interfaces/user";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function register(user: IUser) {
    let msgText = "Cadastro realizado com sucesso!";
    let msgType = "success";

    try {
      const data = await axios
        .post("/users/register", user)
        .then((response) => {
          return response.data;
        });

      await authUser(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function login(user: IUser) {
    let msgText = "Login realizado com sucesso!";
    let msgType = "success";

    try {
      const data = await axios
        .post("http://localhost:3000/auth/login", user)
        .then((response) => {
          return response.data;
        });
      await authUser(data);
    } catch (error) {
      // tratar erro
      console.log(error);
    }
  }

  async function authUser(data: any) {
    setAuthenticated(true);
    localStorage.setItem("token", JSON.stringify(data.token));
  }

  function logout() {
    const msgText = "Logout realizado com sucesso!";
    const msgType = "success";

    setAuthenticated(false);
    localStorage.removeItem("token");
  }

  return { authenticated, loading, register, login, logout };
}
