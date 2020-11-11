import React from "react";
import styled from "styled-components";
import Square from "./Square";

function GameBoard({...props}) {

  const GameBoardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 60vh;
    width: 60vh;
    min-height: 200px;
    min-width: 200px;
  `;

  const BoardRow = styled.div`
    flex: 1 1 auto; 
    display: flex;
    height: 100%;
    width: 100%;
  `;

  return (
    <GameBoardWrapper >
      <BoardRow>
        <Square/>
        <Square/>
        <Square/>
      </BoardRow>
      <BoardRow>
        <Square/>
        <Square/>
        <Square/>
      </BoardRow>
      <BoardRow>
        <Square/>
        <Square/>
        <Square/>
      </BoardRow>
    </GameBoardWrapper>
  );
}

export default GameBoard;