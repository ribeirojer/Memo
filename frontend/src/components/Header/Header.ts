import styled from "styled-components";

export const Wrapper = styled.header`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
  }
  .logo svg {
    color: #ffa500;
  }
  .logo h1 {
    color: #fff;
  }
  div {
    display: flex;
    gap: 1rem;
  }
  .burguer {
    display: none;
  }
  .loginWrapper li {
    list-style-type: none;
  }
  .loginWrapper ul {
    display: flex;
    gap: 1rem;
  }
  .icon {
    position: relative;
  }
  .options {
    position: absolute;
    top: 3rem;
    right: 0rem;
    display: none;
    background-color: #ffa500;
    flex-direction: column;
    padding: 2rem;
  }
  .icon:hover .options {
    display: flex;
  }
  .options:hover {
    display: flex;
  }
  @media (max-width: 425px) {
    .loginWrapper {
      display: none;
    }
    .burguer {
      display: block;
    }
  }
`;
