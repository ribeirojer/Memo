import { Dog } from "phosphor-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {}

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
  .button_cadastrar, .button_login {
    border-radius: 0.5rem;
    background-color: transparent;
    color: #ffa500;
    border: 1px solid #ffa500;
    padding: 0.8rem 1.5rem;
    transition: 0.3s;
    font-weight: 700;
    cursor: pointer;
  }
  .button_login {
    margin-left: 1rem;
    background-color: #ffa500;
    color: #242424;
  }
  .button_login:hover {
    background-color: #242424;
    color: #ffa500;
  }
  .button_cadastrar:hover {
    background-color: #ffa500;
    color: #242424;
  }
`;

const Header = (props: Props) => {
  return (
    <Wrapper id="header">
        <Link to={'/'} className="logo">
          <Dog size={48} />
          <h1>Memo</h1>
        </Link>
        <div>
          <button className="button_cadastrar">Cadastrar</button>
          <Link to={"/login"}>
            <button className="button_login">Login</button>
          </Link>
        </div>
    </Wrapper>
  )
}

export default Header;