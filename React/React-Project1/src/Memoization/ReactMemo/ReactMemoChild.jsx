import React from "react";
const ReactMemoChild=()=>{
    return(
        <div>
            {console.log("Component is re-render")}
            Child Component
        </div>
    )
}
export default React.memo(ReactMemoChild);