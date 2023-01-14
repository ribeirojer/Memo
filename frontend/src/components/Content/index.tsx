import { ArrowsOutSimple, Link } from "phosphor-react";
import { Wrapper } from "./Content";

type Props = {
  link: string;
  name: string;
};

const Content = ({ link, name }: Props) => {
  return (
    <Wrapper>
      <img src={link} alt={name} />
      <div className="card-wrapper">
        <div>
          <Link size={32} />
          <ArrowsOutSimple size={32} />
        </div>
        <h2>{name}</h2>
      </div>
    </Wrapper>
  );
};

export default Content;
