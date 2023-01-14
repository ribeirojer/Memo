import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import useFetch from "../hooks/useFetch";
import { IFlashCard } from "../interfaces/FlashCard";

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

const Exercices = (props: Props) => {
  const [first, setfirst] = useState<boolean>(false);
  const [item, setItem] = useState(0);
  const { subject } = useParams();
  const url = "http://localhost:3000/flashcard";
  const { data, isLoading, error } = useFetch(url);

  if (error) {
    return <p>Houve um problema...</p>;
  }
  if (isLoading) {
    return <p>carregando...</p>;
  }

  function changeItem(itensFrente: number): void {
    setfirst(false);
    if (itensFrente) {
      data.splice(item + itensFrente, 0, data[item]);
      //setdata(dados);
    }
    setItem(item + 1);
  }
  const dados: IFlashCard[] = data;

  return (
    <Wrapper className="wrapper">
      <p>{dados[item].question}</p>
      {first && <p>{dados[item].response}</p>}
      {!first && <p className="dot">.</p>}
      {!first && (
        <span onClick={() => setfirst(true)}>
          <Button color="#12263a" theme="#ffa500">
            Mostrar
          </Button>
        </span>
      )}
      {first && (
        <div className="seguintes">
          <span onClick={() => changeItem(2)}>
            <Button theme="#12263a" color="#f88">
              Repetir
            </Button>
          </span>
          <span onClick={() => changeItem(4)}>
            <Button theme="#12263a" color="#ffa500">
              Difícil
            </Button>
          </span>
          <span onClick={() => changeItem(7)}>
            <Button theme="#12263a" color="#8f8">
              Normal
            </Button>
          </span>
          <span onClick={() => changeItem(0)}>
            <Button theme="#12263a" color="#88f">
              Fácil
            </Button>
          </span>
        </div>
      )}
    </Wrapper>
  );
};

export default Exercices;
