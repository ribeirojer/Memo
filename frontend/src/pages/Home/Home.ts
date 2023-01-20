import styled from "styled-components";

export const Wrapper = styled.header`
  .hero {
    height: 70vh;
    display: flex;
    justify-content: center;
  }
  .hero div {
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 2rem;
  }
  .hero div span {
    color: #ffa500;
  }
  .hero div p {
    margin: 1rem 0;
    font-size: 1.5rem;
    letter-spacing: 1px;
    line-height: 2rem;
  }

  .content {
    padding: 1rem 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
  }
  .claim {
    height: 160px;
    margin-top: 2rem;
    background-color: #ffa500;
    color: #12263aff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .footer {
    padding: 0 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 360px;
  }
  .footer div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer .contacts p {
    margin-top: 0.7rem;
    display: flex;
    align-items: center;
  }
  .footer p svg {
    margin-right: 5px;
  }
  .footer .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
  }
  .footer .logo svg {
    color: #ffa500;
  }
  .footer .logo h2 {
    color: #fff;
  }
  .footer .company div {
    flex-direction: row;
  }
  .footer .company p {
    margin: 1rem 0;
    font-size: 1.2rem;
  }
  .footer div a {
    color: #ffffff;
    margin: 0 0.5rem;
    cursor: pointer;
    transition: 0.3s;
  }
  .footer .company a:hover {
    color: #ffa500;
  }
  .footer .last p span,
  .footer .company p span {
    color: #ffa500;
  }
  .footer .last a {
    text-decoration: none;
  }
  .footer .last p {
    margin-bottom: 0.5rem;
  }
  .scroll {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
  }
  .scroll svg {
    color: #ffa500;
    font-size: 3rem;
  }

  @media (max-width: 425px) {
    .footer {
      flex-direction: column;
    }
    .content {
      justify-content: center;
    }
    .claim {
      padding: 2rem;
    }
    .claim h2 {
      font-size: 1.2rem;
    }
    .footer {
      height: unset;
      margin: 2rem 0;
      gap: 2rem;
    }
  }
`;
