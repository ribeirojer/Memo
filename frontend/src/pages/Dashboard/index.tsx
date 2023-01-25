import { useState } from "react";
import { Wrapper } from "./Dashboard";
import { IUser } from "../../interfaces/User";
import Content from "../../components/Content";
import imageLinks from "../../assets/images.json";

type Props = {};

const DashBoard = (props: Props) => {
  const [user, setUser] = useState<IUser>();
  const [token] = useState(localStorage.getItem("token") || "");

  const subjects = imageLinks;

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
              <span onClick={() => {}} key={item.id}>
                <Content link={item.link} name={item.name} />
              </span>
            );
          })}
      </div>
    </Wrapper>
  );
};

export default DashBoard;
