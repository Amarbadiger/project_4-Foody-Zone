import styled from "styled-components";
import Buttons from "./Buttons";

function Navigation({ input, btn }) {
  return (
    <>
      <Header>
        <div className="top">
          <div>
            <img src="/images/Foody Zone.svg" alt="" width="200px" />
          </div>
          <div>
            <input type="text" onChange={input} placeholder="Search Food" />
          </div>
        </div>
        <div>
          <Buttons />
        </div>
      </Header>
    </>
  );
}
export default Navigation;
const Header = styled.div`
  width: 1200px;
  height: 190px;
  /* background-color: #323334; */
  margin: 0 auto;
  .top {
    width: 100%;
    height: 147px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (0<width<600px) {
      flex-direction: column;
      justify-content: center;
      gap: 10px;
    }
  }
  .top input {
    font-size: 15px;
    border: 1px solid red;
    outline: none;
    background-color: transparent;
    padding: 5px 10px;
    border-radius: 5px;
    color: white;
  }
`;
