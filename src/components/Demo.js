import { useState,useMemo } from "react";
import { findNthPrime } from "../utils/helper";
const Demo=()=>{

    const[text,setText]=useState("");
    const[isDarkTheme,setIsDarkTheme]=useState(false);
    console.log("Rendering");
    //cache the result to change until my result changes .

    // const prime =findNthPrime(text);
     const prime =useMemo=(()=>findNthPrime(text),[text]);
     const v= 10;
     return(
      <div 
         className={"m-4  p-2 w-96  border border-black"+
         (isDarkTheme && " bg-gray-900 text-white")
          }>

          <div className="m-10 p-2 bg-green-200">
               <button onClick={()=>setIsDarkTheme(!isDarkTheme)}>
               Toggle {v}
               </button>

          </div>
         <div>
          <input  className="border border-black w-72 px-2 rounded-lg"
          type="number" 
          value={text} 
          onChange={(e)=>setText(e.target.value)
        }/>
         </div>
         <div>
            <h1 className="mt-4 font-bold text-2xl">Nth Prime: {prime}</h1>
         </div>
      </div>

  )
}
export default Demo;