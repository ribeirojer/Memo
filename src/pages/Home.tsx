import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Content from "../components/Content";
import Button from "../components/Button";
import {
  Dog,
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  Phone,
  PinterestLogo,
  TwitterLogo,
  ArrowCircleUp,
  TiktokLogo,
} from "phosphor-react";

type Props = {};

const Wrapper = styled.header`
  .hero {
    height: 70vh;
    display: flex;
    justify-content: center;
  }
  .hero div {
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 2rem;
  }
  .hero div span {
    color: #ffa500;
  }
  .hero div p {
    margin: 1rem 0;
    font-size: 1.5rem;
    letter-spacing: 1px;
    line-height: 2rem;
  }

  .content {
    padding: 1rem 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
  }
  .claim {
    height: 160px;
    margin-top: 2rem;
    background-color: #ffa500;
    color: #12263aff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .footer {
    padding: 0 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 360px;
  }
  .footer div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer .contacts p {
    margin-top: 0.7rem;
    display: flex;
    align-items: center;
  }
  .footer p svg {
    margin-right: 5px;
  }
  .footer .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
  }
  .footer .logo svg {
    color: #ffa500;
  }
  .footer .logo h2 {
    color: #fff;
  }
  .footer .company div {
    flex-direction: row;
  }
  .footer .company p {
    margin: 1rem 0;
    font-size: 1.2rem;
  }
  .footer div a {
    color: #ffffff;
    margin: 0 0.5rem;
    cursor: pointer;
    transition: 0.3s;
  }
  .footer .company a:hover {
    color: #ffa500;
  }
  .footer .last p span,
  .footer .company p span {
    color: #ffa500;
  }
  .footer .last a {
    text-decoration: none;
  }
  .footer .last p {
    margin-bottom: 0.5rem;
  }
  .scroll {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
  }
  .scroll svg {
    color: #ffa500;
    font-size: 3rem;
  }
`;

const Home = (props: Props) => {
  const [data, setData] = useState([
    {
      id: 1,
      link: "https://images.unsplash.com/photo-1473492201326-7c01dd2e596b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      name: "Língua Portuguesa",
    },
    {
      id: 2,
      link: "https://images.unsplash.com/photo-1552486274-011c96d67c54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Biologia",
    },
    {
      id: 3,
      link: "https://images.unsplash.com/photo-1518082593638-b6e73b35d39a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80",
      name: "Inglês",
    },
    {
      id: 4,
      link: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=945&q=80",
      name: "Artes",
    },
    {
      id: 5,
      link: "https://images.unsplash.com/photo-1448035249594-10682f3c2db3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Matemática",
    },
    {
      id: 6,
      link: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Educação Física",
    },
    {
      id: 7,
      link: "https://images.unsplash.com/photo-1628863353691-0071c8c1874c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Química",
    },
    {
      id: 8,
      link: "https://images.unsplash.com/photo-1534744971734-e1628d37ea01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name: "Física",
    },
    {
      id: 9,
      link: "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "História",
    },
    {
      id: 10,
      link: "https://images.unsplash.com/photo-1567266565446-d9c40ccf59a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Geografia",
    },
    {
      id: 11,
      link: "https://images.unsplash.com/photo-1527767612165-ed1f4194a45c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name: "Sociologia",
    },
    {
      id: 12,
      link: "https://upload.wikimedia.org/wikipedia/commons/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg",
      name: "Filosofia",
    },
  ]);

  return (
    <Wrapper>
      <div className="hero">
        <div>
          <h1>
            Somos a <span>Memo</span> uma plataforma de aprendizado ativo
          </h1>
          <p>
            Repetição espaçada aliada a inteligência artificial criaram o melhor
            dos mundos em educação
          </p>
          <Link to={"/dashboard"}>
            <Button color={"#12263a"} theme={"#ffa500"} text="Experimentar" />
          </Link>
        </div>
      </div>
      <div className="content">
        {data &&
          data.map((item) => {
            return <Content key={item.id} link={item.link} name={item.name} />;
          })}
      </div>
      <section className="claim">
        <h2>Repetição, com correção, a exaustão, leva a perfeição.</h2>
        <Link to={"/dashboard"}>
          <Button
            color={"#ffa500"}
            theme={"#12263a"}
            text="Experimentar"
          ></Button>
        </Link>
      </section>
      <section className="footer">
        <div className="contacts">
          <h3>Entre em Contato</h3>
          <p>
            <MapPin size={20} weight="fill" /> Rua Paulo Malschitzki, 200,
            Joinville - SC
          </p>
          <p>
            <Phone size={20} weight="fill" /> (12) 98158-0992
          </p>
          <p>
            <EnvelopeSimple size={20} weight="fill" /> eduardojerbr@gmail.com
          </p>
        </div>
        <div className="company">
          <Link to={"/"} className="logo">
            <Dog size={48} />
            <h2>Memo</h2>
          </Link>
          <p>
            Repetição espaçada <span>inteligente </span>
          </p>
          <div>
            <a href="https://www.facebook.com" target={"_blank"}>
              <FacebookLogo size={32} />
            </a>
            <a href="https://www.twitter.com" target={"_blank"}>
              <TwitterLogo size={32} />
            </a>
            <a href="https://www.linkedin.com" target={"_blank"}>
              <LinkedinLogo size={32} />
            </a>
            <a href="https://www.instagram.com" target={"_blank"}>
              <InstagramLogo size={32} />
            </a>
            <a href="https://www.pinterest.com" target={"_blank"}>
              <PinterestLogo size={32} />
            </a>
            <a href="https://www.tiktok.com" target={"_blank"}>
              <TiktokLogo size={32} />
            </a>
          </div>
        </div>
        <div className="last">
          <p>&copy; Memo - Todos os direitos reservados.</p>
          <p>
            Desenvolvido com <span> &#x2764; </span>
          </p>
          <p>
            por
            <a target={"_blank"} href="http://www.eduardojer.tech">
              José Eduardo Ribeiro
            </a>
          </p>
        </div>
      </section>
      <Link to={"/"}>
        <span className="scroll">
          <ArrowCircleUp size={54} />
        </span>
      </Link>
    </Wrapper>
  );
};

export default Home;
