import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
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
import { Wrapper } from "./Home";
import Content from "../../components/Content";
import imageLinks from "../../assets/images.json"

type Props = {};

const Home = (props: Props) => {
  const [data, setData] = useState(imageLinks);

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
          <Link to={"/experimentar"}>
            <Button color={"#12263a"} theme={"#ffa500"}>
              Experimentar
            </Button>
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
        <Link to={"/experimentar"}>
          <Button color={"#ffa500"} theme={"#12263a"}>
            Experimentar
          </Button>
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
