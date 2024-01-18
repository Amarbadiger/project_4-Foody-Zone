import { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import styled from "styled-components";
import Main from "./components/Main";
export const BASE_URL = "http://localhost:9000";
function App() {
  const [data, setdata] = useState(null);
  const [load, setload] = useState(false);
  const [error, seterror] = useState(null);
  const [filteredData, setfilteredData] = useState(null);
  const [filteredbtn, setFilterdbtn] = useState(null);
  //useEffect used to stop multiple rendering of the page the solution is UseEffect
  useEffect(() => {
    const foodContainerData = async () => {
      try {
        setload(true);
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setdata(json);
        setfilteredData(json);
        setload(false);
      } catch (error) {
        seterror("Unable to show Data");
      }
    };

    foodContainerData();
  }, []);
  if (error) return <div>{error}</div>;
  if (load) return <div>Loading...</div>;

  function searchFiter(e) {
    const inputValue = e.target.value;
    if (inputValue === "") {
      setfilteredData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    setfilteredData(filter);
  }
  function filterBtn(type) {
    if (type === "full") {
      setfilteredData(data);
      setFilterdbtn("full");
    }
  }
  return (
    <div>
      <Navigation input={searchFiter} btn={filterBtn}></Navigation>
      <FoodCardContainer>
        <Main data={filteredData}></Main>
      </FoodCardContainer>
    </div>
  );
}
export default App;
const FoodCardContainer = styled.div`
  background-image: url("/images/bg (1).png");
  width: 100%;
  height: calc(100vh - 190px);
  background-size: cover;

  @media (0<width<600px) {
    background-image: none;
  }
`;
