import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { Dog, GoogleLogo } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { Wrapper } from "./Login";
import { auth } from "../../services/firebase";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";

type Props = {};

const Login = (props: Props) => {
  const [userFirebase, setUserFirebase] = useState<User>({} as User);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const authen = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authen.authenticated) {
      navigate("/dashboard");
    }
  }, [authen.authenticated]);
  
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      await authen.signIn({ email, password });
      if (authen.user?.name) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  function handleGoogleSignin(): void {
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
          <p>Esqueceu a senha? <Link to={"/forgotpassword"}>Clique aqui</Link></p>
        </Wrapper>
      )}
    </div>
  );
};

export default Login;
