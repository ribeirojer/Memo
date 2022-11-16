import { Dog } from "phosphor-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import ButtonA from "./ButtonA";

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
  div {
    display: flex;
    gap: 1rem;
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
          <Link to={"/login"}>
            <Button color={'#ffa500'} text={'Cadastrar'} />
          </Link>
          <Link to={"/login"}>
            <ButtonA color={'#ffa500'} text={'Login'} />
          </Link>
        </div>
    </Wrapper>
  )
}

export default Header;