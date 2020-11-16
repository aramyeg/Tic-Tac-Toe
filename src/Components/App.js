import React from "react";
import styled from "styled-components";
import GameBoard from "./GameBoard";

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  flex-direction: column;
`;

function App() {
  return (
    <AppWrapper>
      <GameBoard />
    </AppWrapper>
  );
}

export default App;
