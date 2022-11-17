import { ArrowsOutSimple, Link } from "phosphor-react";
import styled from "styled-components";

type Props = {};

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  filter: unset;
  color: #ffffff;
  transition: 0.3s;
  img {
    width: 300px;
    height: 200px;
    border-radius: 1rem;
    cursor: pointer;
  }
  .card-wrapper svg {
    color: #ffffff;
  }
  .card-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    visibility: hidden;
    opacity: 0;
    font-weight: bold;
    transition: 0.3s;
  }
  &:hover > .card-wrapper {
    opacity: 1;
    font-size: 14px;
    visibility: visible;
  }
  &:hover {
    filter: grayscale(1);
  }
`;

const Content = ({
  id,
  link,
  name,
}: {
  id: number;
  link: string;
  name: string;
}) => {
  return (
    <Wrapper key={id}>
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
