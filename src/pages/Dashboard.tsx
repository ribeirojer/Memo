import { useEffect, useState } from "react";
import styled from "styled-components";
import Data from "../assets/ap.json";

type Props = {};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  div h2 {
    font-family: 'Open Sans';
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
  button {
    border-radius: 0.5rem;
    background-color: transparent;
    color: #ffa500;
    border: 1px solid #ffa500;
    padding: 0.8rem 1.5rem;
    transition: 0.3s;
    font-weight: 700;
    cursor: pointer;
  }
  button:hover {
    background-color: #ffa500;
    color: #242424;
  }
`;

const Dashboard = (props: Props) => {
  const dados = Data;
  const [first, setfirst] = useState<boolean>(false);
  const [item, setItem] = useState(0);

  function changeItem(){
    setfirst(false)
    setItem(item+1);
  }

  return (
    <Wrapper>
      <div className="wrapper">
        <img
          src={`https://cdn-icons-png.flaticon.com/512/206/${dados[item].url}`}
          alt={`${dados[item].url}`}
        />
        {first && <h2>{dados[item].name}</h2>}
        {!first && <h2 className="dot">.</h2>}
        {!first && <button onClick={()=>setfirst(true)}>Mostrar</button>}
        {first && (
          <div className="seguintes">
            <button onClick={()=>changeItem()}>Repetir</button>
            <button onClick={()=>changeItem()}>Difícil</button>
            <button onClick={()=>changeItem()}>Normal</button>
            <button onClick={()=>changeItem()}>Fácil</button>
          </div>
          )}
      </div>
    </Wrapper>
  );
};

export default Dashboard;
