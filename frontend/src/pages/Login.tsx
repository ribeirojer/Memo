import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { Dog, FacebookLogo, GithubLogo, GoogleLogo } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../services/firebase";

type Props = {};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 448px;
  border-radius: 0.5rem;
  form {
    margin: 0 0 2rem 0;
  }
  label {
    margin: 1rem 0 0.5rem 0;
    font-size: 14px;
    font-weight: 600;
    display: block;
  }
  input {
    font-size: 16px;
    color: #1a1f36;
    line-height: 28px;
    padding: 8px 16px;
    width: 100%;
    min-height: 44px;
    border: unset;
    border-radius: 4px;
    outline-color: rgb(84 105 212 / 0.5);
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
  }
  input[type="submit"] {
    margin: 1rem 0 0 0;
    background-color: #ffa500;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }
  input[type="submit"]:hover {
    background-color: #dd9000;
  }
  div {
    display: flex;
    gap: 0 2rem;
  }
  div button {
    padding: 0.4rem 0.5rem;
    background-color: transparent;
    border: 1px solid #ffa500;
    color: #ffa500;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.3s;
  }
  div button:hover {
    background-color: #ffa500;
    border: 1px solid #ffa500;
    color: #1a1f36;
  }
`;

const Login = (props: Props) => {
  const [user, setUser] = useState<User>({} as User);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const loading = "";
  const error = "";

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    console.log(user);
  };

  function handleGoogleSignin() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      {user.photoURL ? (
        <div>
          <img src={user.photoURL} alt="foto do usuario" />
          <p>{user.displayName}</p>
          <p>{user.email}</p>
        </div>
      ) : (
        <Wrapper>
          <Dog size={54} color={"#ffa500"} />
          <form id="stripe-login">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
            <input type="submit" name="submit" value="Continue" />
          </form>
          <div>
            <button onClick={handleGoogleSignin}>
              <GoogleLogo size={32} />
            </button>
            <button onClick={handleGoogleSignin}>
              <FacebookLogo size={32} />
            </button>
            <button onClick={handleGoogleSignin}>
              <GithubLogo size={32} />
            </button>
          </div>
          <div id="register">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                type="email"
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <input
                type="password"
                placeholder="Confirme a senha"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
              {!loading && <input type="submit" value="Cadastrar" />}
              {loading && <input type="submit" disabled value="Aguarde..." />}
              {/*error && <Message msg={error} type="error" />*/}
            </form>
            <p>
              Já tem conta? <Link to="/login">Clique aqui</Link>
            </p>
          </div>
        </Wrapper>
      )}
    </div>
  );
};

export default Login;
function useSelector(arg0: (state: any) => any): { loading: any; error: any } {
  throw new Error("Function not implemented.");
}
