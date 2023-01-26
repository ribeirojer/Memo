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
    flex-direction: column;
    background-color: #12263aff;
    padding: 1.5rem;
    border: 2px solid #ffa500;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 8px #000;
  }
  .icon:hover .options {
    display: flex;
  }
  .options:hover {
    display: flex;
  }
  .options span {
    cursor: pointer;
  }
  .dashboardlinks {
    display: flex;
    align-items: center;
  }
  .dashboardlinks a {
    text-decoration: none;
    color: #fff;
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
