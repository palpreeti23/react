import React from "react";
function Button({
    children,
    type= "Button",
    bgColor= "bg-blue-600",
    textColor = "white",
    className = " ",
    ...props
    }){

    return(
        <button className={` py-4 px-2 rounded-lg ${bgColor} ${textColor}`}{...props} >
            {children}
         </button>
    )
}

export default Button