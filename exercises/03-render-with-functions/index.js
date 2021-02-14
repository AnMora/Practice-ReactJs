import React from "react"; //Main React.js library

import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

let text = "I Love React";

// This function returns a string that will be rendered
export const PrintHello = () => {
    return <h1>{text}</h1>;
};

//              what           where
ReactDOM.render(PrintHello(), document.querySelector("#myDiv"));
