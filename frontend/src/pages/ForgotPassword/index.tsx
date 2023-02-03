import { Dog } from "phosphor-react";
import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import api from "../../services/api";
import { Wrapper } from "./ForgotPassword";
import validator from 'validator';

type Props = {};

const ForgotPassword = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!validator.isEmail(email)) {
      setError("Email inválido.");
      return;
    }

    try {
      const response = await api.post('/auth/forgot-password', { email });
      console.log(response.data);
      setError("");
    } catch (error: any) {
      setError(error.message);
      console.error(error.message);
    }
  };

  return (
    <Wrapper>
      <Dog size={54} color={"#ffa500"} />
      <form onSubmit={handleSubmit}>
        <Input
          type={"email"}
          text={"E-mail"}
          placeholder={"Digite seu e-mail"}
          handleOnChange={(e: any) => setEmail(e.target.value)}
          value={email}
        />
        {error && <p>{ error }</p>}
        <Button color={"#ffa500"} theme={"#12263a"}>
          Continue
        </Button>
      </form>
    </Wrapper>
  );
};

export default ForgotPassword;
