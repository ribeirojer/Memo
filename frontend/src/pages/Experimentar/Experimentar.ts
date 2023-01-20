import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  .welcome {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 4rem;
  }
  .welcome div {
    width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .welcome p {
    font-size: 1.2rem;
    margin: 1rem 0;
  }
  .welcome p span {
    color: #ffa500;
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
