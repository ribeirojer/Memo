import { Dog } from "phosphor-react";
import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Wrapper } from "./ForgotPassword";

type Props = {};

const ForgotPassword = (props: Props) => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      //enviar email
      //await authen.signIn({ email, password });

    } catch (error) {
      console.log(error);
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
        <Button color={"#ffa500"} theme={"#12263a"}>
          Continue
        </Button>
      </form>
    </Wrapper>
  );
};

export default ForgotPassword;
