import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 45vh;
  justify-content: flex-end;

  .question {
    font-size: 2rem;
  }
  .response {
    width: 60vw;
    margin: 3rem 0;
    font-size: 1.3rem;
    line-height: 2rem;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  div h2 {
    font-family: "Open Sans";
    margin: 0 0 3rem 0;
  }
  div img {
    height: 250px;
  }
  .dot {
    color: #242424;
  }
  .seguintes {
    display: flex;
    gap: 0.5rem;
  }

  @media (max-width: 425px) {
    .welcome div {
      margin-top: 0rem;
      display: flex;
      flex-direction: column;
    }
  }
`;
