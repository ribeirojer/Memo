import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
overflow: overlay;
max-height: 490px;
.card {
  display: flex;
  padding: 1rem;
  border: 1px solid #ffa500;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}
.card p {
  width: 300px;
}
form div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
}
.subject {
  width: 50px;
}
@media (max-width: 425px) {
  .welcome div {
    margin-top: 0rem;
    display: flex;
    flex-direction: column;
  }
}
`;