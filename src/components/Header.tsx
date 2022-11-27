import { Dog } from "phosphor-react";
import { Link } from "react-router-dom";
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
  return (
    <Wrapper id="header">
      <Link to={"/"} className="logo">
        <Dog size={48} />
        <h1>Memo</h1>
      </Link>
      <div className="loginWrapper">
        <Link to={"/login"}>
          <Button color={"#ffa500"} theme={"#12263a"} text={"Login"} />
        </Link>
        <Link to={"/login"}>
          <Button color={"#12263a"} theme={"#ffa500"} text={"Cadastrar"} />
        </Link>
      </div>
      <div className="burguer">
        <span>hhh</span>
      </div>
    </Wrapper>
  );
};

export default Header;
