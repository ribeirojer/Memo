import useFetch from "../../hooks/useFetch";
import Button from "../Button";
import { Wrapper } from "./ListCards";

type Props = {
  editCard: any;
  removeCard: any;
};

const ListCards = ({ editCard, removeCard }: Props) => {
  const url = "http://localhost:3000/flashcard";
  const { data, isLoading, error } = useFetch(url);

  if (error) {
    return <p>Houve um problema...</p>;
  }
  if (isLoading) {
    return <p>carregando...</p>;
  }

  return (
    <Wrapper>
      {data.map((item: any) => {
        return (
          <div key={item._id} className="card">
            <p>{item.question}</p>
            <p>{item.response}</p>
            <span className="subject">{item.subject}</span>
            <span onClick={() => editCard(item._id)}>
              <Button color="#12263a" theme="#55f">Editar</Button>
            </span>
            <span onClick={() => removeCard(item._id)}>
              <Button color="#12263a" theme="#f55">Excluir</Button>
            </span>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default ListCards;
