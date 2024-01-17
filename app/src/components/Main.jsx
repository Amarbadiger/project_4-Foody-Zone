import styled from "styled-components";
import { BASE_URL } from "../App";
import Buttons, { Btn } from "./Buttons";
function Main({ data }) {
  return (
    <>
      <FoodContainer>
        <FoodCards>
          {data?.map(({ name, text, image, price }) => (
            <Foodcard key={name}>
              <div className="Food_image">
                <img src={BASE_URL + image} alt="food Images" />
              </div>
              <div className="food">
                <div className="info">
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
                <Btn>{price.toFixed(2)}</Btn>
                {/* //to fiexed is to show the 00
                  after decimal */}
              </div>
            </Foodcard>
          ))}
        </FoodCards>
      </FoodContainer>
    </>
  );
}
export default Main;
const FoodContainer = styled.section`
  width: 1200px;
  margin: 0 auto;
  height: calc(100vh - 200px);
`;
const FoodCards = styled.div`
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  column-gap: 32px;
  padding-top: 80px;
`;
const Foodcard = styled.div`
  width: 340px;
  height: 167px;
  border-radius: 19.447px;
  border: 0.659px solid #98f9ff;
  background: url(<path-to-image>),
    lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat,
    radial-gradient(
      151.92% 127.02% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.04) 77.08%,
      rgba(70, 144, 212, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.184196472167969px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  font-family: "Inter", sans-serif;
  .food {
    display: flex;
    justify-content: space-between;
    align-items: end;
    flex-direction: column;
    gap: 15px;
  }
  .food {
    .info {
      h3 {
        font-size: 16px;
        font-weight: 600;
      }
      p {
        font-size: 12px;
        font-weight: 400;
      }
    }
  }
`;
