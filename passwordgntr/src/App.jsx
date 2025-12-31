import { useState,useCallback,useEffect, useRef } from "react"

function App() {

  const [password,setPassword]= useState("")
  const [lenght,setLenght] = useState(8)
  const [number,setNumber] = useState(false)
  const [spchrt,setSpchrt] = useState(false)

  const memo1 = useCallback(function generatorPassword(){
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number==true){
      str+="0123456789"
    }
    if(spchrt==true){
      str+="!@#$%^&*()_+-=[]{}|;:',.<>/?~"
    }

    for(let i=1;i<=lenght;i++){
     const get =  Math.floor(Math.random()*str.length)
     pass+=str.charAt(get)
    }

    setPassword(pass)

  }

,[lenght,number,spchrt])

useEffect(()=>{
  memo1 ()
}, [])


const passref = useRef(null)


/// copy tet between range
function copy(){
  let input = passref.current
  input.select()
  input.setSelectionRange(0, 8);
 const select =  input.value.substring(0, 8);
  window.navigator.clipboard.writeText(select)
}

  return (
    <>
 
    <div className=" flex justify-center items-center mt-6 flex-col
     bg-gray-700 w-4xl h-40 gap-10 mx-auto rounded-2xl ">

      <div>
        <h1 className=" text-4xl ">Password Generator</h1>
        </div>
        <div>
        <div className=" flex gap-10 ">
         <input
              type="text"
              ref={passref}
              value={password}
               placeholder="Type something..."
               className=" w-full max-w-xl block px-4 py-3 text-lg text-black border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
/>

        <button onClick={copy} className="px-6 py-3 backdrop-blur-md bg-white/10 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 active:scale-95 active:shadow-none transition">
  Copy
</button>
          </div>
          <div className=" flex gap-6 ">

              <input
              
              type="range"
              min={6}
              max={100}
              value={lenght}
              onChange={(e)=> setLenght(e.target.value)}

               />
               <label> lenght : {lenght}</label>

                <input
              type="checkbox"
                Checked = {number}
                onChange={()=> {setNumber((prev)=> !prev)}}
               />
               <label>Number</label>

                <input
              type="checkbox"
              Checked = {spchrt}
              onChange={()=> {setSpchrt((prev)=> !prev)}}
               />
               <label>Special Chart</label>

          </div>
            
          
          
        </div>


    </div>

    
    </>
  )
}

export default App
