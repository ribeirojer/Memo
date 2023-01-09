import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import Button from "./Button";

type Props = {
  editCard: any;
  removeCard: any;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  overflow: overlay;
  max-height: 490px;
  .card {
    display: flex;
    padding: 1rem;
    border: 1px solid #ffa500;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }
  .card p {
    width: 300px;
  }
  form div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
  }
  .subject {
    width: 50px;
  }
  @media (max-width: 425px) {
    .welcome div {
      margin-top: 0rem;
      display: flex;
      flex-direction: column;
    }
  }
`;

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
              <Button color="#12263a" theme="#55f" text="Editar" />
            </span>
            <span onClick={() => removeCard(item._id)}>
              <Button color="#12263a" theme="#f55" text="Excluir" />
            </span>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default ListCards;
