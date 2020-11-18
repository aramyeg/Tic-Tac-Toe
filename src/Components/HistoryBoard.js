import React, { memo } from "react";

const SimpleList = (history) => (
    <ul>History
        {history.map(function (item) {
            return <li key={item}>{item}</li>;
        })}
    </ul>
    
);

function HistoryBoard({ ...props }) {
   
    return (
        <>
            {SimpleList(props.history)}
        </>
    );
}

export default memo(HistoryBoard);