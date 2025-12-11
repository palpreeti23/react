import React from "react";

function Logo({width='100px'}){

    return (
        <div className="w-full object-cover overflow-hidden">
            <img src="/src/img/logo.png" alt=""
            className="w-13 h-10 rounded-lg"
             />
        </div>
    )
}

export default Logo;