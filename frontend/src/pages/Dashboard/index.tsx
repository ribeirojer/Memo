import { useContext } from "react";
import { Wrapper } from "./Dashboard";
import Content from "../../components/Content";
import imageLinks from "../../assets/images.json";
import { AuthContext } from "../../context/AuthContext";

type Props = {};

const DashBoard = (props: Props) => {
  const auth = useContext(AuthContext);
  const subjects = imageLinks;

  return (
    <Wrapper>
      <div className="card">
        <p>informações de {auth.user?.name}</p>
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
