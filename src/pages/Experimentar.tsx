import { useState } from "react";
import styled from "styled-components";
import Data from "../assets/ap.json";
import DogImage from "../assets/undraw_dog_re_7980.svg";
import Button from "../components/Button";

type Props = {};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  .welcome {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 4rem;
  }
  .welcome div {
    width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .welcome p {
    font-size: 1.2rem;
    margin: 1rem 0;
  }
  .welcome p span {
    color: #ffa500;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  div h2 {
    font-family: "Open Sans";
    margin: 0 0 3rem 0;
  }
  div img {
    height: 250px;
  }
  .dot {
    color: #242424;
  }
  .seguintes {
    display: flex;
    gap: 0.5rem;
  }

  @media (max-width: 425px) {
    .welcome div {
      margin-top: 0rem;
      display: flex;
      flex-direction: column;
    }
  }
`;

const Experimentar = (props: Props) => {
  const [dados, setDados] = useState(Data);
  const [welcome, setWelcome] = useState<boolean>(true);
  const [first, setfirst] = useState<boolean>(false);
  const [item, setItem] = useState(0);

  function changeItem(itensFrente: number): void {
    setfirst(false);
    if (itensFrente) {
      dados.splice(item + itensFrente, 0, dados[item]);
      setDados(dados);
    }
    setItem(item + 1);
  }

  return (
    <Wrapper>
      {welcome ? (
        <div className="welcome">
          <div>
            <h3>Olá!</h3>
            <p>
              Nosso método é <span>simples</span>, verifique se sabe qual é a
              bandeira apresentada
            </p>
            <p>Depois clique em mostrar para conferir a resposta</p>
            <p>
              Informe a <span>dificuldade</span> que teve em encontrar a
              resposta
            </p>
            <p>
              Nós <span>adaptamos o conteúdo</span> de acordo com a facilidade
              que você informa.
            </p>
            <span onClick={() => setWelcome(false)}>
              <Button color="#12263a" theme="#ffa500" text="Iniciar" />
            </span>
          </div>
          <img src={DogImage} alt="" />
        </div>
      ) : (
        <div className="wrapper">
          <img
            src={`https://cdn-icons-png.flaticon.com/512/206/${dados[item].url}`}
            alt={`${dados[item].url}`}
          />
          {first && <h2>{dados[item].name}</h2>}
          {!first && <h2 className="dot">.</h2>}
          {!first && (
            <span onClick={() => setfirst(true)}>
              <Button color="#12263a" theme="#ffa500" text="Mostrar" />
            </span>
          )}
          {first && (
            <div className="seguintes">
              <span onClick={() => changeItem(2)}>
                <Button theme="#12263a" color="#f88" text="Repetir" />
              </span>
              <span onClick={() => changeItem(4)}>
                {" "}
                <Button theme="#12263a" color="#ffa500" text="Difícil" />
              </span>
              <span onClick={() => changeItem(7)}>
                {" "}
                <Button theme="#12263a" color="#8f8" text="Normal" />
              </span>
              <span onClick={() => changeItem(0)}>
                {" "}
                <Button theme="#12263a" color="#88f" text="Fácil" />
              </span>
            </div>
          )}
        </div>
      )}
    </Wrapper>
  );
};

export default Experimentar;
