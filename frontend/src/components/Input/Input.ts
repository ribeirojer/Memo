import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin: 1rem 0 0.5rem 0;
    font-weight: 600;
  }
  input {
    font-size: 16px;
    line-height: 28px;
    padding: 8px 16px;
    width: 100%;
    color: #1a1f36;
    background-color: rgb(255, 255, 255);
    border-radius: 0.5rem;
    border: 2px solid transparent;
  }
`;
