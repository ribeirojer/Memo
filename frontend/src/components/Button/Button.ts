import styled from "styled-components";

export const Wrapper = styled.button`
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