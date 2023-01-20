import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  form {
    display: flex;
    width: 24rem;
    flex-direction: column;
    gap: 1rem;
    margin: 0 0 2rem 0;
  }
  .google {
    padding: 0.4rem 0.5rem;
    background-color: transparent;
    border: 1px solid #ffa500;
    color: #ffa500;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.3s;
  }
  .google:hover {
    background-color: #ffa500;
    border: 1px solid #ffa500;
    color: #1a1f36;
  }
`;
