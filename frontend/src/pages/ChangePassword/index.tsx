import { Dog } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { AuthContext } from "../../context/AuthContext";
import { Wrapper } from "./ChangePassword";

type Props = {};

const ChangePassword = (props: Props) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    if (auth.authenticated) {
      navigate("/login");
    }
  }, [auth]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const { token } = param;
    console.log(token);

    try {
      await auth.changePassword({ token, password });
      if (auth.user?.name) {
        navigate("/login");
      }
    } catch (error: any) {
      setError(error);
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <div>
        <Dog size={54} color={"#ffa500"} />
        {<p>{error}</p>}
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
        <Button color={"#ffa500"} theme={"#12263a"}>
          Cadastrar
        </Button>
      </form>
    </Wrapper>
  );
};

export default ChangePassword;
