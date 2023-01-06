import { Dog } from "phosphor-react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

type Props = {};

const Wrapper = styled.header`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
  }
  .logo svg {
    color: #ffa500;
  }
  .logo h1 {
    color: #fff;
  }
  div {
    display: flex;
    gap: 1rem;
  }
  .burguer {
    display: none;
  }
  
  @media (max-width: 425px) {
    .loginWrapper {
      display: none;
    }
    .burguer {
      display: block;
    }
  }
`;

const Header = (props: Props) => {
  const { auth } = useAuth();
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const handleLogout = () => {

    navigate("/login");
  };

  const handleSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };
  return (
    <Wrapper id="header">
      <Link to={"/"} className="logo">
        <Dog size={48} />
        <h1>Memo</h1>
      </Link>
      
    <nav id="nav">
      <ul id="nav-links">
        {auth ? (
          <>
            <li>
              <NavLink to="/">
                {/*<BsHouseDoorFill />*/}
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink to={`/users/${user._id}`}>
                  {/*<BsFillCameraFill />*/}
                </NavLink>
              </li>
            )}
            <li>
              <NavLink to="/profile">
                {/*<BsFillPersonFill />*/}
              </NavLink>
            </li>
            <li>
              <span onClick={handleLogout}>Sair</span>
            </li>
          </>
        ) : (
          <>
            {" "}
            <li>
              <NavLink to="/login">Entrar</NavLink>
            </li>
            <li>
              <NavLink to="/register">Cadastrar</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
      <div className="loginWrapper">
        <Link to={"/login"}>
          <Button color={"#ffa500"} theme={"#12263a"} text={"Login"} />
        </Link>
        <Link to={"/sendcard"}>
          <Button color={"#12263a"} theme={"#ffa500"} text={"FlashCard"} />
        </Link>
        <Link to={"/listcards"}>
          <Button color={"#12263a"} theme={"#ffa500"} text={"Listcards"} />
        </Link>
      </div>
      <div className="burguer">
        <span>hhh</span>
      </div>
    </Wrapper>
  );
};

export default Header;
function useAuth(): { auth: any; } {
  throw new Error("Function not implemented.");
}

function useSelector(arg0: (state: any) => any): { user: any; } {
  throw new Error("Function not implemented.");
}

