import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "./Register";
import { Dog } from "phosphor-react";
import { AuthContext } from "../../context/AuthContext";
import Input from "../../components/Input";
import Button from "../../components/Button";

type Props = {};

const Register = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.authenticated) {
      navigate("/login");
    }
  }, [auth]);
  
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    try {
      await auth.register(user);
      if (auth.user?.name) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper id="register">
      <Dog size={54} color={"#ffa500"} />
      <form onSubmit={handleSubmit}>
        <Input
          type={"text"}
          text={"Nome"}
          placeholder={"Digite seu nome"}
          handleOnChange={(e: any) => setName(e.target.value)}
          value={name}
        />
        <Input
          type={"email"}
          text={"E-mail"}
          placeholder={"Digite seu e-mail"}
          handleOnChange={(e: any) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          type={"password"}
          text={"Senha"}
          placeholder={"Digite sua senha"}
          handleOnChange={(e: any) => setPassword(e.target.value)}
          value={password}
        />
        <Input
          type={"password"}
          text={"Confirmação de senha"}
          placeholder={"Digite novamente sua senha"}
          handleOnChange={(e: any) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        {!auth.isLoading && (
          <Button color={"#ffa500"} theme={"#12263a"}>
            Cadastrar
          </Button>
        )}
        {auth.isLoading && (
          <Button disabled color={"#ffa500"} theme={"#12263a"}>
            Aguarde...
          </Button>
        )}
      </form>
      <p>
        Já tem conta? <Link to="/login">Clique aqui</Link>
      </p>
    </Wrapper>
  );
};

export default Register;
