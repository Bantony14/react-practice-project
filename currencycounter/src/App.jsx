import './App.css'
import { useCallback, useEffect,useState } from "react";

function App() {
  const [inr,SetInr] = useState("INR")
  const [usd,setUsd] = useState("USD")
  const [fromValue,setFromValue] = useState("")
   const [tovalue,setToValue] = useState("")
   const [fromCurrency,setFromCurrency] = useState("USD")
   const [toCurrency,setToCurrency] = useState("INR")
   const [rates,setRates] = useState({})
   const [allCurrency,setAllCurrency]  = useState([])
   
  

useEffect(()=>{
document.body.style.backgroundImage = "url('https://as1.ftcdn.net/v2/jpg/02/60/42/44/1000_F_260424425_nwTfdEUWXz8tsPODbgfX17u0S7dgaX8D.jpg')";
  document.body.style.backgroundSize = "cover";
   document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
},[])


    
function swtch(){
  setFromCurrency(toCurrency)
  setToCurrency(fromCurrency)
}  

useEffect(() => {
  async function fetchRates() {
   

      const res = await fetch(
        `https://open.er-api.com/v6/latest/${fromCurrency}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch rates");
      }

      const data = await res.json();
      console.log("API DATA ===>", data);
      console.log("API RATES ===>", data.rates);

      setRates(data.rates)
      setAllCurrency([data.base ,...Object.keys(data.rates)])
      
      

     
  }



 fetchRates()
}, [fromCurrency]);



  function memos(){

    if(fromValue=="") return

    const getvalue = fromValue * rates[toCurrency]
    setToValue(getvalue)

   
    }

  

  return(
 
    <>
     
        <div className=" mx-auto w-100 h-80 backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-xl shadow-lg mt-30 flex flex-col gap-4 ">
        <h1 className=' text-center text-4xl text-amber-50 text-indigo-200 '>Currency Convertor</h1>

         {/* first field */}
          <div>
            <label>From</label>
          </div>
          <div className=" flex gap-4 ">
          <input
                  value={fromValue}
                 
                   type="number"
                    class="w-full px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm
          border-white/20 text-white placeholder-white/60
         focus:outline-none focus:ring-2 "
          onChange={(e)=>setFromValue(Number(e.target.value))}
/>
<select
value={fromCurrency}
  onChange={(e)=>setFromCurrency(e.target.value)}
  
  class="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm
         border border-white/20 text-white text-sm
         focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/40
         appearance-none"
>
  {allCurrency.map((allRatesKeys)=> ( 
  <option className='text-black ' key={allRatesKeys} value={allRatesKeys} >{allRatesKeys}
  </option>)) }
   
 
</select>
          </div>

          <div>

         {/* second field */}
            <label htmlFor="From">To</label>
          </div>
          <div className=" flex gap-4 ">
          <input
                  
                  value={tovalue}
                  onChange={(e)=>setToValue(e.target.value)}
                   type="number"
                   readOnly
                    className="w-full px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm
          border-white/20 text-white placeholder-white/60
         focus:outline-none focus:ring-2 "
        
/>
<select
value={toCurrency}
onChange={(e)=>setToCurrency(e.target.value)}
  class="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm
         border border-white/20 text-white text-sm
         focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/40
         appearance-none"
>
 {allCurrency.map((allRatesKeys)=> ( 
  <option className='text-black ' key={allRatesKeys} value={allRatesKeys} >{allRatesKeys}
  </option>)) }
 

  
</select>
          </div>
    {/*  Button Div */}
          <div className=' text-center flex gap-4 justify-center '> 
            {/*  first button */}
  <button onClick={memos} type="button"  className="px-5 py-2 rounded-xl bg-blue-500 text-white font-semibold
         hover:bg-blue-600 active:bg-blue-700
         transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer ">Check</button>

{/*  Second button */}


         <button onClick={swtch} type="button"  className="px-5 py-2 rounded-xl bg-blue-500 text-white font-semibold
         hover:bg-blue-600 active:bg-blue-700
         transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer ">Switch</button>
  </div>

  
        </div>

    </>
  )
}

export default App
