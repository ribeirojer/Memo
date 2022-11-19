import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { useState } from "react";
import { auth } from "../services/firebase";

type Props = {};

const Login = (props: Props) => {
  const [user, setUser] = useState<User>({} as User);
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
      {user.photoURL && <img src={user.photoURL} alt="foto do usuario" />}
      <p>{user.displayName}</p>
      <p>{user.email}</p>
      <button onClick={handleGoogleSignin}>Login</button>
    </div>
  );
};

export default Login;
