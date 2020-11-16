import React from "react";
import styled from "styled-components";
import GameBoard from "./GameBoard";

function App() {
  return (
    <AppWrapper>
      <GameBoard />

    </AppWrapper>
  );
}
const AppWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    flex-direction: column;
  `;

export default App;


