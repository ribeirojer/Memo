import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { Dog, GoogleLogo } from "phosphor-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Wrapper } from "./Login";
import { auth } from "../../services/firebase";

type Props = {};

const Login = (props: Props) => {
  const [userFirebase, setUserFirebase] = useState<User>({} as User);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    login(user);
    navigate("/dashboard");
  };

  function handleGoogleSignin() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        setUserFirebase(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      {userFirebase.photoURL ? (
        <div>
          <img src={userFirebase.photoURL} alt="foto do usuario" />
          <p>{userFirebase.displayName}</p>
          <p>{userFirebase.email}</p>
        </div>
      ) : (
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
            <Input
              type={"password"}
              text={"Senha"}
              placeholder={"Digite sua senha"}
              handleOnChange={(e: any) => setPassword(e.target.value)}
              value={password}
            />
            <Button color={"#ffa500"} theme={"#12263a"}>
              Continue
            </Button>
          </form>
          <button className="google" onClick={handleGoogleSignin}>
            <GoogleLogo size={32} />
          </button>
        </Wrapper>
      )}
    </div>
  );
};

export default Login;
