import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  filter: unset;
  color: #ffffff;
  transition: 0.3s;
  img {
    width: 300px;
    height: 200px;
    border-radius: 1rem;
    cursor: pointer;
  }
  .card-wrapper svg {
    color: #ffffff;
  }
  .card-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    visibility: hidden;
    opacity: 0;
    font-weight: bold;
    transition: 0.3s;
    cursor: pointer;
  }
  &:hover > .card-wrapper {
    opacity: 1;
    font-size: 14px;
    visibility: visible;
  }
  &:hover {
    filter: grayscale(1);
  }
`;
