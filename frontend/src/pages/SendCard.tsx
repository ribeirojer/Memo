import axios from "axios";
import { Dog } from "phosphor-react";
import { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import ListCards from "../components/ListCards";

type Props = {};

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;
  gap: 2rem;
  form {
    width: 500px;
    margin: 0 0 2rem 0;
  }
  label {
    margin: 1rem 0 0.5rem 0;
    font-size: 14px;
    font-weight: 600;
    display: block;
  }
  input,
  select {
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
  select {
    width: 50%;
  }
  form div {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
`;

const SendCard = (props: Props) => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [selectedOption, setSelectedOption] = useState("1");
  const [isShowItens, setIsShowItens] = useState(false);

  const options = [
    { value: 1, label: "Língua Portuguesa" },
    { value: 2, label: "Biologia" },
    { value: 3, label: "Inglês" },
    { value: 4, label: "Artes" },
    { value: 5, label: "Matemática" },
    { value: 6, label: "Educação Física" },
    { value: 7, label: "Química" },
    { value: 8, label: "Física" },
    { value: 9, label: "História" },
    { value: 10, label: "Geografia" },
    { value: 11, label: "Sociologia" },
    { value: 12, label: "Filosofia" },
  ];

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

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      question: question,
      response: response,
      subject: selectedOption,
    };

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

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Dog size={54} color={"#ffa500"} />
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
        <div>
          <label htmlFor="subject">Disciplina</label>
          <select
            value={selectedOption}
            onChange={(event) => setSelectedOption(event.target.value)}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <input type="submit" name="submit" value="Enviar" />
      </form>
      <div>
        <span onClick={() => setIsShowItens(!isShowItens)}>
          <Button color="#12263a" theme="#ffa500" text="Mostar" />
        </span>
        {isShowItens ? null : (
          <ListCards editCard={editCard} removeCard={removeCard} />
        )}
      </div>
    </Wrapper>
  );
};

export default SendCard;
