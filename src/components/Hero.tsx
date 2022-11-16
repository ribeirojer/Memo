import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {}

const Wrapper = styled.header`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
  }
  div span {
    color: #ffa500;
  }  
  .button_login {
    border-radius: 0.5rem;
    background-color: transparent;
    color: #ffa500;
    border: 1px solid #ffa500;
    padding: 0.8rem 1.5rem;
    transition: 0.3s;
    font-weight: 700;
    cursor: pointer;
  }
  .button_login:hover {
    background-color: #ffa500;
    color: #242424;
  }
`;

const Hero = (props: Props) => {
  return (
      <Wrapper>
        <div>
          <h2>Somos a <span>Memo</span> uma plataforma de aprendizado ativo</h2>
          <p>Repetição espaçada aliada a inteligência artificial criaram o melhor dos mundos em educação</p>
          <Link to={'/dashboard'}>
            <button className='button_login'>Começar!</button>
          </Link>
        </div>
      </Wrapper>
  )
}

export default Hero;