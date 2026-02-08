import React from "react";
const InlineCSS = ()=>{
    let h1style={
        color:'red',
        border:'2px solid green',
        backgroundColor:'yellow'
    };
    return(
        <div>
            <h1 style={{color:'blue', border:'1px solid black'}}>This is Inline CSS</h1>
            <h1 style={h1style}>Example 2 Inline CSS</h1>
        </div>
    );
};
export default InlineCSS;
    