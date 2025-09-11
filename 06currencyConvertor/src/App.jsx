
// import { useCallback, useEffect, useState } from 'react'
// import { InputBox } from './components'
// import useCurrencyInfo from './hooks/useCurrencyInfo'


// function App() {

//   const [amount, setAmount] = useState(0)
//   const [from, setFrom] = useState('usd')
//   const [to, setTo] = useState('inr')
//   const [convertedAmount, setConvertedAmount] = useState(0);

//   const currencyInfo = useCurrencyInfo(from)
//   const options = Object.keys(currencyInfo)

//   const swap = () => {
//     setFrom(to)
//     setTo(from)
//     setAmount(convertedAmount)
//     setConvertedAmount(amount)
//   }

//   const convert = () => {
//     setConvertedAmount(amount * currencyInfo[to])
//   }

//   return (
//     <div
//       className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//       style={{
//         backgroundImage: `url('https://images.pexels.com/photos/1114623/pexels-photo-1114623.jpeg')`,
//       }}
//     >
//       <div className="w-full">
//         <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               convert()

//             }}
//           >
//             <div className="w-full mb-1">
//               <InputBox
//                 label="From"
//                 amount={amount}
//                 currencyOption={options}
//                 onCurrencyChange={(currency) => setAmount(amount)}
//                 selectCurrency={from}
//                 onAmountChange={(amount)=>setAmount(amount)}

//               />
//             </div>
//             <div className="relative w-full h-0.5">
//               <button
//                 type="button"
//                 className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                 onClick={swap}

//               >
//                 swap
//               </button>
//             </div>
//             <div className="w-full mt-1 mb-4">
//               <InputBox
//                 label="To"
//                 amount={convertedAmount}
//                 currencyOption={options}
//                 onCurrencyChange={(currency) => setTo(amount)}
//                 selectCurrency={to}
//                 amountDisable

//               />
//             </div>
//             <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
//               Convert {from.toUpperCase()} to {to.toUpperCase()}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App

import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo);

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = ()=>{
setConvertedAmount(amount*currencyInfo[to])
  }

  return (

    <div className='w-full h-screen bg-cover bg-no-repeat flex flex-wrap justify-center items-center'
      style={{ backgroundImage: `url('https://images.pexels.com/photos/1114624/pexels-photo-1114624.jpeg')` }}
    >
      <div className=' rounded-xl p-4 flex flex-col justify-center items-center border-2 border-gray-400 bg-white/40'>
       <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()

            }}
          >

          <InputBox
            label='from'
            amount={amount}
            selectCurrency={from}
            currencyOption={options}
            onCurrencyChange={(currency)=>setAmount(amount)}
            onAmountChange={(amount)=>setAmount(amount)}
          />
    
        <button 
        type='button'
        className='bg-blue-600 text-center text-white py-1 px-4 font-semibold border-2 border-blue-50 rounded-lg absolute mx-32 -translate-y-6'
        onClick={swap}
        >swap</button>

          <InputBox
            label='to'
            amount={convertedAmount}
            selectCurrency={to}
            currencyOption={options}
            onCurrencyChange={(currency)=>setTo(amount)}
            amountDisable
            
          />
    
        <button
          type="submit"
          className='bg-blue-600 text-center py-2 w-full text-white rounded-lg mt-4'
          >convert {from.toUpperCase()} to {to.toUpperCase()}</button>
      
      </form>
      </div>
       
    </div>

  )
}

export default App
