import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  padding: 0 2rem;
  gap: 2rem;
  .card {
    background-color: #1a3753;
    width: 33vw;
  }
  .content {
    width: 66vw;
    background-color: #1a3753;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.5rem;
  }
  .content img {
    width: 180px;
    height: 150px;
  }
`;
