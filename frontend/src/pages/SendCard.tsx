import axios from "axios";
import { Dog } from "phosphor-react";
import { useState } from "react";
import styled from "styled-components";

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
`;

const SendCard = (props: Props) => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = { question: question, response: response };

    try {
      const response = await axios.post(
        "http://localhost:3000/flashcard",
        data
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
    </Wrapper>
  );
};

export default SendCard;
