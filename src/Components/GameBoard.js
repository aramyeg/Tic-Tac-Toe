import React, {useState, useEffect, memo} from "react";
import styled from "styled-components";
import Square from "./Square";
import calculateWinner from "./CalculateWinner";

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


function GameBoard({gameCount, ...props}) {
const [stepNumber, setStepNumber] = useState(0);
const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
const [xIsNext, setXIsNext] = useState(true);
useEffect(() => {
  setBoardSquares(Array(9).fill(null)); 
  setXIsNext(true);
}, [gameCount])


const handleClick = index => {
  const squares = [...boardSquares];  //copy of our board state
  if (squares[index]) return;  // if the index of the board is filled, return
  squares[index] = xIsNext ? "X" : "O"; //add X or O
  setBoardSquares(squares);  //set the state of the board
  setXIsNext(!xIsNext);   // set the state of the turn
  
  
}
 // return a square with the correct value and function
const renderSquare = (index) => {
  return <Square value={boardSquares[index]} onClick={() => handleClick(index)} />
}

const winner = calculateWinner(boardSquares);


let status = winner ? `Winner is: ${winner}`:`Player Turn :${xIsNext ? "X" : "O"}`;
 


  return (
    <>
      <HDependant>{status}</HDependant>
      <GameBoardWrapper >
        <BoardRow>
           <Square value={renderSquare(0)}/>
           <Square value={renderSquare(1)}/>
           <Square value={renderSquare(2)}/>
        </BoardRow>
        <BoardRow>
        <Square value={renderSquare(3)}/>
        <Square value={renderSquare(4)}/>
        <Square value={renderSquare(5)}/>
        </BoardRow>
        <BoardRow>
        <Square value={renderSquare(6)}/>
        <Square value={renderSquare(7)}/>
        <Square value={renderSquare(8)}/>
        </BoardRow>
      </GameBoardWrapper>
    </>
  );
}

export default memo(GameBoard);