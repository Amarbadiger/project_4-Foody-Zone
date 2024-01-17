import styled from "styled-components";

function Buttons() {
  return (
    <>
      <ButtonsContainer>
        <Btn>Welcome to Foody Zone </Btn>
      </ButtonsContainer>
    </>
  );
}
export default Buttons;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Btn = styled.button`
  border-radius: 5px;
  background: #ff4343;
  padding: 6px 12px;
  color: white;
  border: none;
  margin-left: 12px;
  cursor: pointer;

  &:hover {
    background-color: #e70606;
  }
`;
