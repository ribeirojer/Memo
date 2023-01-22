import axios from "axios";
import { useState, useEffect, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content";
import { Wrapper } from "./Dashboard";
import imageLinks from "../../assets/images.json"

type Props = {};

const DashBoard = (props: Props) => {
  const [user, setUser] = useState<any>({});
  const [token] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();

  const subjects = imageLinks;

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
