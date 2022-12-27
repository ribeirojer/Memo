import axios from "axios";
import { Dog } from "phosphor-react";
import { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import useFetch from "../hooks/useFetch";

type Props = {};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 448px;
  border-radius: 0.5rem;
  form {
    margin: 0 0 2rem 0;
  }
  label {
    margin: 1rem 0 0.5rem 0;
    font-size: 14px;
    font-weight: 600;
    display: block;
  }
  input {
    font-size: 16px;
    color: #1a1f36;
    line-height: 28px;
    padding: 8px 16px;
    width: 100%;
    min-height: 44px;
    border: unset;
    border-radius: 4px;
    outline-color: rgb(84 105 212 / 0.5);
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
  }
  input[type="submit"] {
    margin: 1rem 0 0 0;
    background-color: #ffa500;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }
  input[type="submit"]:hover {
    background-color: #dd9000;
  }
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

  @media (max-width: 425px) {
    .welcome div {
      margin-top: 0rem;
      display: flex;
      flex-direction: column;
    }
  }
`;

const SendCard = (props: Props) => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const url = "http://localhost:3000/flashcard";
  const { data, isLoading, error } = useFetch(url);

  if (error) {
    return <p>Houve um problema...</p>;
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = { question: question, response: response };

    try {
      const response = await axios.post(
        "http://localhost:3000/flashcard",
        data
      );
      setQuestion("");
      setResponse("");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

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
      <Dog size={54} color={"#ffa500"} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="question">Questão</label>
        <input
          onChange={(e) => setQuestion(e.target.value)}
          type="text"
          name="question"
          placeholder="Insira a questão"
        />
        <label htmlFor="response">Resposta</label>
        <input
          onChange={(e) => setResponse(e.target.value)}
          type="text"
          name="response"
          placeholder="Insira a resposta"
        />
        <input type="submit" name="submit" value="Enviar" />
      </form>
      {isLoading ? (
        <p>carrgando...</p>
      ) : (
        data.map((item: any) => {
          return (
            <div key={item._id} className="card">
              <p>{item.question}</p>
              <p>{item.response}</p>
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

export default SendCard;
