import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "./Register";
import Input from "../../components/Input";
import { Dog } from "phosphor-react";
import Button from "../../components/Button";

type Props = {};

const Register = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register, loading, authenticated } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    register(user);
    if (authenticated) {
      navigate("/dashboard");
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
        {!loading && (
          <Button color={"#ffa500"} theme={"#12263a"}>
            Cadastrar
          </Button>
        )}
        {loading && (
          <Button disabled color={"#ffa500"} theme={"#12263a"}>
            Aguarde...
          </Button>
        )}
        {/*error && <Message msg={error} type="error" />*/}
      </form>
      <p>
        Já tem conta? <Link to="/login">Clique aqui</Link>
      </p>
    </Wrapper>
  );
};

export default Register;
