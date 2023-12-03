import React from "react";
import { useLocation } from "react-router-dom";

function Response(){
        const locate = useLocation();
        console.log(locate)
        return(
            <div>
            <h1>Hello</h1>
            </div>
        )
}

export default Response