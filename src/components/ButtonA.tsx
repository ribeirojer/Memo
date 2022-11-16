import { Dog } from "phosphor-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {};

const Wrapper = styled.button`
  border-radius: 0.5rem;
  background-color: ${(props) => props.color};
  color: #242424;
  border: 1px solid #242424;
  padding: 0.8rem 1.5rem;
  transition: 0.3s;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: #242424;
    color: ${(props) => props.color};
    border: 1px solid ${(props) => props.color};
  }
`;

const Button = ({
  color,
  text,
}: {
  color: string;
  text: string;
}) => {
  return (
    <Wrapper color={color}>
      { text }
    </Wrapper>
  );
};

export default Button;
