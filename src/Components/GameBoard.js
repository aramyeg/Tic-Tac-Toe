import React, { useState } from "react";
import styled from "styled-components";
import Square from "./Square";
import Reset from "./Reset";
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

const HDependant = styled.div`
  font-size: 6vh;
  font-weight: 700;
  padding: 10px;
`;

function GameBoard() {
  const [gamer, setGamer] = useState("X");
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const click = (i, j) => {
    const shallowBoard = [...board];
    if (!shallowBoard[i][j]) {
      gamer === "O" ? setGamer("X") : setGamer("O");
      gamer === "X" ? (shallowBoard[i][j] = "X") : (shallowBoard[i][j] = "O");
    }
    setBoard(shallowBoard);
  };

  const boardRow = board.map((el, i) => (
    <BoardRow key={i}>
      {el.map((elem, ind) => (
        <Square
          i={i}
          j={ind}
          key={ind + Math.random()}
          click={click}
          value={elem}
        />
      ))}
    </BoardRow>
  ));
  const onResetClick = () => {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  };
  return (
    <>
      <HDependant>Player Turn : {gamer}</HDependant>
      <GameBoardWrapper>{boardRow}</GameBoardWrapper>
      <Reset onClick={onResetClick} />
    </>
  );
}

export default GameBoard;
