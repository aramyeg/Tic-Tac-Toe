import React, {memo} from "react";
import styled from "styled-components";

const SquareWrapper = styled.div`
    flex-direction: row;
    background-color: #c39ea0;
    color: black;
    flex: 1 1 auto;
    display: block;
    margin: 5px;
    width: 100%;
    font-size: 14vh;
    text-align: center;
    cursor: default;
    
    div{
      font-family: Roboto;
      line-height: 1.3;
      overflow: hidden;s
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

function Square({char, clickHandler, i, j, ...props}) {

  return (
    <SquareWrapper onClick={ ()=>{ !char && clickHandler( i , j )} } >
      <div>
        {char}
      </div>
    </SquareWrapper>
  );
}

export default memo(Square);