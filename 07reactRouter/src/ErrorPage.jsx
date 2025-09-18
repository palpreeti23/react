import React from "react";
import {useRouteError} from 'react-router-dom'

function ErrorPage(){
    const error = useRouteError()
    // console.log(error)
    
    return(

        <>
        <div className="flex flex-col justify-center items-center">
           <div className="text-gray-700 text-2xl m-2 font-bold">Ooops!
         </div>
            <img 
         className="w-10 h-10 text-center"
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmWru8q17zpOzzzT1s475ZS_8fOL1GS0teSw&s" alt="" />
        
         <div className="text-gray-800 text-xl m-2">Sorry, some unexpected error has occured...</div>
         <div>
            <i className="text-gray-800 ">{error.statusText || error.message} 
            
            </i>
         </div>
        </div>
        
        </>


    )
}

export default ErrorPage