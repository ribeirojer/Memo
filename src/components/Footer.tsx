import { Dog, EnvelopeSimple, FacebookLogo, InstagramLogo, LinkedinLogo, MapPin, Phone, PinterestLogo, TwitterLogo } from 'phosphor-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

type Props = {}

const Wrapper = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 360px;
    div {
      width: 33%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .contacts p {
      margin-top: 0.7rem;
      display: flex;
      align-items: center;
    }
    p svg {
      margin-right: 5px;
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
    }
    .logo svg {
      color: #ffa500;
    }
    .logo h2 {
      color: #fff;
    }
    .company div {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    div a {
      color: #ffffff;
      margin: 0 0.5rem;
      cursor: pointer;
      transition: 0.3s;
    }
    .company a:hover {
      color: #ffa500;
    }
    .last p span {
      color: #ffa500;
    }
    .last a {
      text-decoration: none;
    }
`;

const Footer = (props: Props) => {
  return (
    <Wrapper>
      <div className='contacts'>
        <h3>Entre em Contato</h3>
        <p><MapPin size={20} weight="fill"/> Rua Paulo Malschitzki, 200, Joinville - SC</p>
        <p><Phone size={20} weight="fill"/> (12) 98158-0992</p>
        <p><EnvelopeSimple size={20} weight="fill"/> eduardojerbr@gmail.com</p>
      </div>
      <div className='company'>        
        <Link to={'/'} className="logo">
          <Dog size={48} />
          <h2>Memo</h2>
        </Link>  
        <p>Aprendizagem de uma forma nunca vista</p>
        <p>Repetição espaçada inteligente</p>
        <div>
          <a href='https://www.facebook.com' target={'_blank'}><FacebookLogo size={32} /></a>
          <a href='https://www.twitter.com' target={'_blank'}><TwitterLogo size={32} /></a>
          <a href='https://www.linkedin.com' target={'_blank'}><LinkedinLogo size={32} /></a>
          <a href='https://www.instagram.com' target={'_blank'}><InstagramLogo size={32} /></a>
          <a href='https://www.pinterest.com' target={'_blank'}><PinterestLogo size={32} /></a>
        </div>
      </div>
      <div className='last'>
        <p>&copy; Memo! - Todos os direitos reservados.</p>
        <p>Desenvolvido com <span> &#x2764; </span></p>
        <p>por<a target={"_blank"} href="http://www.eduardojer.tech">José Eduardo Ribeiro</a></p>
      </div>
    </Wrapper>
  )
}

export default Footer;