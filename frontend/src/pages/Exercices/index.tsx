import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import useFetch from "../../hooks/useFetch";
import { IFlashCard } from "../../interfaces/FlashCard";
import { Wrapper } from "./Exercices";

type Props = {};

const Exercices = (props: Props) => {
  const [first, setfirst] = useState<boolean>(false);
  const [item, setItem] = useState(0);
  const { subject } = useParams();
  const url = `http://localhost:3000/flashcard/${subject}`;
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
      <p className="question">{dados[item].question}</p>
      {first && <p className="response">{dados[item].response}</p>}
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
