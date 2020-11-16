import React from "react";
import styled from "styled-components";


function Square({ square,clickHandler,i,j,turn,winner,...props}) {
  return (
    <SquareWrapper onClick={() => { clickHandler(i, j, turn) }} >
      <div style={square==="X"?{color: 'red'}:{color: 'green'}} >
        {square}
      </div>
    </SquareWrapper>
  );
}
const SquareWrapper = styled.div`
flex-direction: row;
color: black;
flex: 1 1 auto;
display: block;
margin: 5px;
width: 100%;
font-size: 14vh;
text-align: center;
cursor: pointer;
border: 5px outset #c39ea0;

div{
  font-family: Roboto;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  animation-name: appear;
  animation-duration: 0.8s;
  white-space: nowrap;
}

@keyframes appear {
  from {
    transform: scale(0.1);
  }
  to {
    transform: scale(1);
  }
}
`;
export default Square;