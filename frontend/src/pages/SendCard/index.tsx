import axios from "axios";
import { Dog } from "phosphor-react";
import { useState } from "react";
import Button from "../../components/Button";
import ListCards from "../../components/ListCards";
import { Wrapper } from "./SendCard";

type Props = {};

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
    const data = {
      question,
      response,
      subject: selectedOption,
    };

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
          <Button color="#12263a" theme="#ffa500">
            Mostar
          </Button>
        </span>
        {isShowItens ? (
          <ListCards editCard={editCard} removeCard={removeCard} />
        ) : null}
      </div>
    </Wrapper>
  );
};

export default SendCard;
