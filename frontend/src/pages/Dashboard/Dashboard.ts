import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  padding: 0 2rem;
  gap: 2rem;
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1a3753;
    width: 33vw;
  }
  .infoUser {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;
  }
  .content {
    width: 66vw;
    background-color: #1a3753;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
  .content img {
    max-width: 180px;
    max-height: 150px;
  }
`;
