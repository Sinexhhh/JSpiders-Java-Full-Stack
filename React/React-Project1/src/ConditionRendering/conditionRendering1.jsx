import React, { useState } from "react";
const ConditionRendering1 = () => {
    let [data, setData] = useState("d");
        switch (data) {
        case "a":
            return <h1>Keyword is A</h1>;
        case "b":
            return <h1>Keyword is B</h1>;
        case "c":
            return <h1>Keyword is C</h1>;
        case "d":
            return <h1>Keyword is D</h1>;
        default:
            return <h1>Keyword is not found</h1>;
    }

    if (data === "d") {
        return <h1>Keyword is A</h1>;
        } else if (data === "b") {
            return <h1>Keyword is B</h1>;
        } else if (data === "c") {
            return <h1>Keyword is C</h1>;
        } else if (data === "d") {
            return <h1>Keyword is D</h1>;
        } else {
            return <h1>Keyword is not found</h1>;
        }
    };
    export default ConditionRendering1;

