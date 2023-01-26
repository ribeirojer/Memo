import { useContext, useEffect } from "react";
import { Wrapper } from "./Dashboard";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Content from "../../components/Content";
import imageLinks from "../../assets/images.json";
import Calendary from "../../components/Calendar";
import Progress from "../../components/Progress";

type Props = {};

const DashBoard = (props: Props) => {
  const auth = useContext(AuthContext);
  const subjects = imageLinks;
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.authenticated) {
      navigate("/login");
    }
  }, [auth.authenticated]);

  return (
    <Wrapper>
      <div className="card">
        <Calendary />
        <Progress />
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
/*
  <div className="infoUser">
    <UserCircle size={48} color={"#ffa500"} />
    <h1>{auth.user?.name}</h1>
  </div>
*/

export default DashBoard;
