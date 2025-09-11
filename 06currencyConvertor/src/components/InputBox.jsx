// import React, { useId } from "react";
// import useCurrencyInfo from "../hooks/useCurrencyInfo";


// function InputBox({
//     label,
//     amount,
//     onAmountChange,
//     onCurrencyChange,
//     amountDisable = false,
//     currencyDisable = false,
//     currencyOption = [], //empty array so that it won't crash when user doesn't select anything
//     selectCurrency ='usd',
//     className = ""

// }) {

//     const myAmountId = useId()

//     return (
//         <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
//             <div className="w-1/2">
//                 <label htmlFor="myAmountId" 
//                 className="text-black/40 mb-2 inline-block">
//                  {label}
//                 </label>
//                 <input
//                 id="myAmountId"
//                     className="outline-none w-full bg-transparent py-1.5"
//                     type="number"
//                     placeholder="Amount"
//                     disabled={amountDisable}
//                     value={amount}
//                     onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value
//                     ))}
//                     //onAmountChange && checks wheather there's any amount or not so that it wont crash when its empty.
//                 />
//             </div>
//             <div className="w-1/2 flex flex-wrap justify-end text-right">
//                 <p className="text-black/40 mb-2 w-full">Currency Type</p>
//                 <select
//                     className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
//                     disabled={currencyDisable}
//                     value={selectCurrency}
//                     onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
//                 >
//                    {currencyOption.map((currency)=>(
                       
//                         <option key={currency} value={currency}>
//                             {currency}
//                         </option>
//                    ))}

//                 </select>
//             </div>
//         </div>
//     );
// }

// export default InputBox;


import React, { useId } from 'react';
import useCurrencyInfo from '../../../06currencyConvertor/src/hooks/useCurrencyInfo';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  amountDisable = false,
  currencyDisable = false,
  currencyOption = [],
  selectCurrency,

}) {

  const myAmountId = useId('')
  return (

    <div className='flex mb-3'>
      <div className='flex flex-col bg-white rounded-l-lg p-4 flex-wrap'>
        <label 
        htmlFor='myAmountId'
        className='text-gray-500'>{label}</label>
        <input
        id='myAmountId'
          type="number"
          placeholder='amount'
          className='text-black mt-2 outline-none'
          value={amount}
          disabled={amountDisable}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}

        />
      </div>

      <div className='flex flex-col flex-wrap bg-white rounded-r-lg p-2 justify-end
        items-end '>
        <p className='text-gray-500'>currency type</p>
        <select className='outline-none mt-2 font-base bg-gray-200 rounded-lg w-[70%]'
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
      {currencyOption.map((currency)=>(
    <option key={currency} value={currency}>
      {currency}</option>

      ))}

        </select>
      </div>
    </div>
  )
}

export default InputBox;