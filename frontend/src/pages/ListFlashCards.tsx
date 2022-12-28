import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import useFetch from "../hooks/useFetch";

type Props = {};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const ListFlashCards = (props: Props) => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const url = "http://localhost:3000/flashcard";
  const { data, isLoading, error } = useFetch(url);

  if (error) {
    return <p>Houve um problema...</p>;
  }
  const editCard = async (id: string) => {
    const data = { question: question, response: response };

    try {
      const response = await axios.patch(
        `http://localhost:3000/flashcard/${id}`,
        data
      );
      setQuestion("");
      setResponse("");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const removeCard = async (id: string) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/flashcard/${id}`
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper>
      {isLoading ? (
        <p>carrgando...</p>
      ) : (
        data.map((item: any) => {
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
        })
      )}
    </Wrapper>
  );
};

export default ListFlashCards;