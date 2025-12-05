import React, { useId } from "react"
import { forwardRef }from "react"


function Select({
    options,
    lable,
    className = "",
    ...props
},ref){

    const id = useId();
    return(

        <div className="w-full">
            {lable && <lable htmlfor={id} className="">
                {lable}
            </lable>}
            <select
            {...props}
            id={id}
             className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
             >
             {options ?.map((options)=>(
            <option key={options} value={options}>
                {options}
            </option>
            ))}
            </select>
        </div>
    )
}

export default forwardRef(Select)