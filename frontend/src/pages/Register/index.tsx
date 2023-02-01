import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "./Register";
import { Dog } from "phosphor-react";
import { AuthContext } from "../../context/AuthContext";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { registerFormSchema } from "./utilsRegister";

type Props = {};

const Register = (props: Props) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
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
      // Valida os dados do formulário de acordo com o esquema
      const validatedData = await registerFormSchema.validate(user);
      console.log(validatedData);
    } catch (error: any) {
      setError(error.message);
      console.error(error.message);
    }

    try {
      await auth.register(user);
      if (auth.user?.name) {
        navigate("/login");
      }
    } catch (error:any) {
      setError(error);
      console.log(error);
    }
  };

  return (
    <Wrapper id="register">
      <div>
        <Dog size={54} color={"#ffa500"} />
        <h2>{error}</h2>
      </div>
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
