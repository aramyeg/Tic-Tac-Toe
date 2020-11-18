import React from "react";
import styled from "styled-components";
import Square from "./Square";
import { useState, memo } from "react";
import HistoryBoard from "./HistoryBoard";
function GameBoard({ ...props }) {

  const [winner, setWinner] = useState(null);
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);
  const [turn, setTurn] = useState(true);
  const [history, setHistory] = useState([]);
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
        key={'1' + i + ind}
        square={square}
        turn={turn}
        clickHandler={clickHandler}
      />)
    ))
  )

  const historyUpdate = (i, j) => {
    const shallowHistory = [...history];
    shallowHistory.push(board[i][j] + " (" + i + "," + j + ")");
    setHistory(shallowHistory)
    // console.log(history);
  }


  
  const clickHandler = (i, j) => {
    if (board[i][j] === "" && winner == null) {
      const shallowBoard = [...board];
      shallowBoard[i][j] = turn ? "X" : "O";
      setBoard(shallowBoard);
      setTurn(!turn);
      calcWin(board);
      historyUpdate(i,j);
    }
  }

  // const highlight = (a, b, c, d) => {
  //   console.log(1+a+b, c, d)
  // }

  const renderRows = board.map((row, ind) => <BoardRow key={ind}>{renderSquare(row, ind)}</BoardRow>);
  const calcWin = (board) => {
    // row test
    for (let i = 0; i < board.length; i++) {
      if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0]) {
        // highlight(i, 0, 'row', board[i][0])
        setWinner(board[i][0])
        board[i][0] === "X" ? setPlayer1(player1 + 1) : setPlayer2(player2 + 1)
        return board[i][0]
      }
    }

    //column test
    for (let i = 0; i < board.length; i++) {
      if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i]) {
        // highlight(0, i, 'column', board[0][i])
        setWinner(board[0][i])
        board[0][i] === "X" ? setPlayer1(player1 + 1) : setPlayer2(player2 + 1)
        return board[0][i]
      }
    }

    //diagonal test
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0]) {
      // highlight(0, 0, 'diagonal', board[0][0])
      setWinner(board[0][0])
      board[0][0] === "X" ? setPlayer1(player1 + 1) : setPlayer2(player2 + 1)
      return board[0][0]
    }

    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2]) {
      // highlight(0, 2, 'diagonal', board[0][2])
      setWinner(board[0][2])
      board[0][2] === "X" ? setPlayer1(player1 + 1) : setPlayer2(player2 + 1)
      return board[0][2]
    }
    return false
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Score>Player X: {player1} </Score>
        <Score>Player O: {player2}</Score>
      </div>
      <HDependant>{winner ? `Winner ` + winner : turn ? "Player Turn : X" : "Player Turn : O"}</HDependant>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <GameBoardWrapper >
          {renderRows}
        </GameBoardWrapper>
        
        <HistoryBoard history={history}/>
      </div>

      <ResetButton onClick={() => {
        setWinner(null)
        setTurn(true)
        setBoard([
          ["", "", ""],
          ["", "", ""],
          ["", "", ""]
        ])
        setHistory([])
      }}>Reset
      </ResetButton>

    </>
  );
}
const Score = styled.div`
     display:inline-block;
     padding:0.35em 1.2em;
     border:0.1em solid #FFFFFF;
     margin:0.3em;
     border-radius:0.12em;
     box-sizing: border-box;
     text-decoration:none;
     font-weight:600;
     color:#FFFFFF;
     text-align:center;
     transition: all 0.2s;
     background: black;
     cursor: pointer;
     font-size: 6vh;
     font-family: Roboto;

`;
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
const ResetButton = styled.button`
    display:inline-block;
     padding:0.35em 1.2em;
     border:0.1em solid #FFFFFF;
     margin:0.3em;
     border-radius:0.12em;
     box-sizing: border-box;
     text-decoration:none;
     font-weight:600;
     color:#FFFFFF;
     text-align:center;
     transition: all 0.2s;
     background: #FA255E;
     cursor: pointer;
     font-size: 6vh;
     font-family: Roboto;
     :hover{
       color:#fa255e;
       background-color: black;
     }
     :active{
       color:#fa255e;
       background-color: black;
       padding: 0.35em;
     }
  `;
export default memo(GameBoard);