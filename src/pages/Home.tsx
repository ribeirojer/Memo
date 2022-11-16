import { ArrowCircleUp } from 'phosphor-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

type Props = {}

const Claim = styled.section`
  height: 160px;
  margin-top: 2rem;
  background-color: #ffa500;
  color: #242424;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .button_login {
    border-radius: 0.5rem;
    background-color: #242424;
    color: #ffa500;
    border: 1px solid #ffa500;
    padding: 0.8rem 1rem;
    transition: 0.3s;
    font-weight: 700;
    cursor: pointer;
    width: 160px;
    line-height: 1.5rem;
  }
  .button_login:hover {
    background-color: #ffa500;
    color: #242424;
    border: 1px solid #242424;
  }
`;
const Scroll = styled.span`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  svg {
    color: #ffa500;
    font-size: 3rem;
  }
`;

const Home = (props: Props) => {
  return (
    <div>
      <Hero/>
      <Content/>
      <Claim>
        <h2>Repetição, com correção, a exaustão, leva a perfeição.</h2>
        <Link to={'/dashboard'}>
          <button className='button_login'>Experimentar gratuitamente</button>
        </Link>
      </Claim>
      <Footer/>
      <Link to={'/'}>
        <Scroll>
          <ArrowCircleUp size={54} />
        </Scroll>
      </Link>
    </div>
  )
}

export default Home;