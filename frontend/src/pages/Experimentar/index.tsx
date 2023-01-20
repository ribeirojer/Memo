import { useState } from "react";
import Data from "../../assets/ap.json";
import DogImage from "../../assets/undraw_dog_re_7980.svg";
import Button from "../../components/Button";
import { Wrapper } from "./Experimentar";

type Props = {};

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
              <Button color="#12263a" theme="#ffa500">Iniciar</Button>
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
              <Button color="#12263a" theme="#ffa500">Mostrar</Button>
            </span>
          )}
          {first && (
            <div className="seguintes">
              <span onClick={() => changeItem(2)}>
                <Button theme="#12263a" color="#f88">Repetir</Button>
              </span>
              <span onClick={() => changeItem(4)}>
                <Button theme="#12263a" color="#ffa500">Difícil</Button>
              </span>
              <span onClick={() => changeItem(7)}>
                <Button theme="#12263a" color="#8f8">Normal</Button>
              </span>
              <span onClick={() => changeItem(0)}>
                <Button theme="#12263a" color="#88f">Fácil</Button>
              </span>
            </div>
          )}
        </div>
      )}
    </Wrapper>
  );
};

export default Experimentar;
