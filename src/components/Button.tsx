import styled from "styled-components";

type Props = {};

const Wrapper = styled.button`
  border-radius: 0.5rem;
  background-color: transparent;
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  padding: 0.8rem 1.5rem;
  transition: 0.3s;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.color};
    color: #242424;
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
