import { Dog } from "phosphor-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Wrapper } from "./Header";
import Button from "../Button";

type Props = {};

const Header = (props: Props) => {
  const auth = "";
  const user = "";

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Wrapper id="header">
      <Link to={"/"} className="logo">
        <Dog size={48} />
        <h1>Memo</h1>
      </Link>

      <nav id="nav" className="loginWrapper">
        <ul id="nav-links">
          {auth ? (
            <>
              <li>
                <NavLink to="/">{/*<BsHouseDoorFill />*/}</NavLink>
              </li>
              {user && (
                <li>
                  <NavLink to={`/users/${user}`}>
                    {/*<BsFillCameraFill />*/}
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink to="/profile">{/*<BsFillPersonFill />*/}</NavLink>
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
        <span>hhh</span>
      </div>
    </Wrapper>
  );
};

export default Header;
function useAuth(): { auth: any } {
  throw new Error("Function not implemented.");
}

function useSelector(arg0: (state: any) => any): { user: any } {
  throw new Error("Function not implemented.");
}
