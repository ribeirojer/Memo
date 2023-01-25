import { Dog, UserCircle } from "phosphor-react";
import { Link, NavLink } from "react-router-dom";
import { Wrapper } from "./Header";
import Button from "../Button";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

type Props = {};

const Header = (props: Props) => {
  const auth = useContext(AuthContext);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <Wrapper id="header">
      <Link to={"/"} className="logo">
        <Dog size={48} />
        <h1>Memo</h1>
      </Link>

      <nav id="nav" className="loginWrapper">
        <ul id="nav-links">
          {auth.user ? (
            <>
              <li>
                <NavLink to="/dashboard">
                  {auth.user.name}
                  <UserCircle />
                </NavLink>
              </li>
              <li>
                <span onClick={handleLogout}>Sair</span>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">
                  <Button color={"#ffa500"} theme={"#12263a"}>
                    Login
                  </Button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/register">
                  <Button color={"#12263a"} theme={"#ffa500"}>
                    Cadastrar
                  </Button>
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div className="burguer">
        <span>Menu</span>
      </div>
    </Wrapper>
  );
};

export default Header;
