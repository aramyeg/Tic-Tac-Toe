import React from "react";
import styled from "styled-components";
import Square from "./Square";
import { useState } from "react";


function GameBoard({ ...props }) {

  const [turn, setTurn] = useState(true);
  const [board, setBoard] = useState(
    [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ]
  );
 
  const renderSquare = (row, i) => (
    row.map((square, ind) => (
      (<Square
        i={i}
        j={ind}
        key={ind}
        char={square}
        clickHandler={clickHandler}
      />)
    ))
  )

  const clickHandler = (i, j) => {
    const shallowBoard = [...board];
    shallowBoard[i][j] = turn ? "X" : "O";
    setBoard(shallowBoard);
    setTurn(!turn);
    console.log(shallowBoard);
    
  }
  const renderRows = board.map((row, ind) => <BoardRow key={ind}>{renderSquare(row, ind)}</BoardRow>);

  return (
    <>
      <HDependant>Player Turn : {turn ? "X" : "O"}</HDependant>
      <GameBoardWrapper >
        {renderRows}
      </GameBoardWrapper>
    </>
  );
}





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
export default GameBoard;