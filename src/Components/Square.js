import React, {memo} from "react";
import styled from "styled-components";


function Square({...props}) {

  const SquareWrapper = styled.div`
  flex-direction: row;
    background-color: #66f9b0;
    color: black;
    flex: 1 1 auto;
    display: block;
    margin: 5px;
    width: 100%;
    font-size: 14vh;
    text-align: center;
    cursor: default;
  
// .squares {
//   display: block;
//   width: 100%;
//   height: 100%;
//   border: none;
//   flex-direction: row;
//   background-color: red;
//   color: black;
//   flex: 1 1 auto;
//   display: grid;
//   margin: 0px;
//   font-size: 10vh;
//   text-align: center;
//   cursor: default;
  
// }

    .squares{
      flex: 1 1 auto;
      display: grid;
      width: 100%;
      height: 100%;
      font-family: Roboto;
      line-height: 1.2;
      overflow: hidden;
      text-overflow: ellipsis;
      box-sizing: border-box;
      animation-name: appear;
      animation-duration: 0.8s;
      white-space: nowrap;
    }
    
  

    // @keyframes appear {
    //   from {
    //     transform: scale(0.1);
    //   }
    //   to {
    //     transform: scale(1);
    //   }
    // }
  `;

  return (
    <SquareWrapper onClick={props.onClick} >
      <div className="squares">
        {props.value}
      </div>
    </SquareWrapper>
  );
}

export default memo(Square);