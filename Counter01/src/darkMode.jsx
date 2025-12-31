import React from "react"


function DarkMode(){

    function done(){
       let blak =  document.body.style.backgroundColor;
       
       
         if(blak === "" || blak ==="white"){
            blak = "black"
         } else{
           blak = "white"
         }
         document.body.style.backgroundColor = blak

    }

    return(
        <>
        <button onClick={done} >Dark Mode</button>
        </>
    )
}

export default DarkMode