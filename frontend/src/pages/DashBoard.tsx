import axios from "axios";
import { useState, useEffect, SetStateAction } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Content from "../components/Content";

type Props = {};

const Wrapper = styled.header`
  display: flex;
  padding: 0 2rem;
  gap: 2rem;
  .card {
    background-color: #1a3753;
    width: 33vw;
  }
  .content {
    width: 66vw;
    background-color: #1a3753;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.5rem;
  }
  .content img {
    width: 180px;
    height: 150px;
  }
`;

const DashBoard = (props: Props) => {
  const [user, setUser] = useState<any>({});
  const [token] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();

  const subjects = [
    {
      id: 1,
      link: "https://images.unsplash.com/photo-1473492201326-7c01dd2e596b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      name: "Língua Portuguesa",
    },
    {
      id: 2,
      link: "https://images.unsplash.com/photo-1552486274-011c96d67c54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Biologia",
    },
    {
      id: 3,
      link: "https://images.unsplash.com/photo-1518082593638-b6e73b35d39a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80",
      name: "Inglês",
    },
    {
      id: 4,
      link: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=945&q=80",
      name: "Artes",
    },
    {
      id: 5,
      link: "https://images.unsplash.com/photo-1448035249594-10682f3c2db3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Matemática",
    },
    {
      id: 6,
      link: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Educação Física",
    },
    {
      id: 7,
      link: "https://images.unsplash.com/photo-1628863353691-0071c8c1874c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Química",
    },
    {
      id: 8,
      link: "https://images.unsplash.com/photo-1534744971734-e1628d37ea01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name: "Física",
    },
    {
      id: 9,
      link: "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "História",
    },
    {
      id: 10,
      link: "https://images.unsplash.com/photo-1567266565446-d9c40ccf59a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Geografia",
    },
    {
      id: 11,
      link: "https://images.unsplash.com/photo-1527767612165-ed1f4194a45c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name: "Sociologia",
    },
    {
      id: 12,
      link: "https://upload.wikimedia.org/wikipedia/commons/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg",
      name: "Filosofia",
    },
  ];

  useEffect(() => {
    axios
      .get("/users/checkuser", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response: { data: SetStateAction<{}> }) => {
        setUser(response.data);
      });
  }, [token]);

  function handleNavigate(id: number) {
    navigate(`/exercises/${id}`);
  }

  return (
    <Wrapper>
      <div className="card">
        <p>informações</p>
        <p>graficos</p>
      </div>
      <div className="content">
        {subjects &&
          subjects.map((item) => {
            return (
              <span onClick={() => handleNavigate(item.id)} key={item.id}>
                <Content link={item.link} name={item.name} />
              </span>
            );
          })}
      </div>
    </Wrapper>
  );
};

export default DashBoard;
