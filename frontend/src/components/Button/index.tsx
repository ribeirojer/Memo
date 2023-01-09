import styled from "styled-components";

type Props = {};

const Wrapper = styled.button`
  border-radius: 0.5rem;
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  background-color: ${(props) => props.theme};
  padding: 0.8rem 1.5rem;
  transition: 0.3s;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme};
    border: 1px solid ${(props) => props.theme};
    background-color: ${(props) => props.color};
  }
`;

const Button = ({ color, theme, text }: { color: string; theme: string; text: string }) => {
  return (
    <Wrapper color={color} theme={theme}>
      {text}
    </Wrapper>
  );
};

export default Button;
