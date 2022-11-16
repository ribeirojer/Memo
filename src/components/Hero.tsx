import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

type Props = {}

const Wrapper = styled.header`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
  }
  div span {
    color: #ffa500;
  }
  div p {
    margin: 1rem 0;
    font-size: 1.5rem;
    letter-spacing: 1px;
    line-height: 2rem;
  }
`;

const Hero = (props: Props) => {
  return (
      <Wrapper>
        <div>
          <h1>Somos a <span>Memo</span> uma plataforma de aprendizado ativo</h1>
          <p>Repetição espaçada aliada a inteligência artificial criaram o melhor dos mundos em educação</p>
          <Link to={'/dashboard'}>
            <Button color='#ffa500' text='Experimentar'/>
          </Link>
        </div>
      </Wrapper>
  )
}

export default Hero;