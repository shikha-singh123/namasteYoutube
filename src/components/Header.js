
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { useSelector } from "react-redux";
const Header=()=>{
   const[searchQuery,setSearchQuery]=useState("");
   const[suggestions,setSuggestions]=useState([]);
   const [showSuggestions,setShowSuggestions]=useState(false);

   const searchCache=useSelector((store)=>store.search);
        const dispatch=useDispatch();
   useEffect(()=>{
        //DEBOUNCING
       
     const timer=setTimeout(()=>{
      if(searchCache[searchQuery]){
           setSuggestions(searchCache[searchQuery]);
      }else{
         getSearchSuggestions();
      }
   },200);
      return()=>{
         clearTimeout(timer);
      };
    },[searchQuery]);
      
   

      const getSearchSuggestions=async()=>{
      console.log("API Call"+searchQuery);

        const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const json=await data.json();
        setSuggestions(json[1]); 
      //dispatch update cache
      dispatch(cacheResults({
         [searchQuery]:json[1],
      })
      );
          }

    const toggleMenuhandler=()=>{
           dispatch(toggleMenu());
    }
    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            <div className=" mt-1 flex col-span-1">
              <img 
              onClick={()=>toggleMenuhandler()}
              className="h-9 mt-3 cursor-pointer" alt="menu"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"/>


              <a href='/'>
              <img  className="h-14 "alt="logo"
              src="https://t3.ftcdn.net/jpg/04/03/98/64/360_F_403986499_hB7zfgOXezReA0sKkxl34RoT9TbNkbpH.jpg"/>
              
              </a>
              </div>
        <div className=" mt-3 col-span-10 px-10">
           <div>
                <input
                 className=" px-5 w-1/2 border border-gray-400 rounded-l-full p-2"  
                 type="text" value={searchQuery}
                  onChange={(e)=>setSearchQuery(e.target.value)}
                  onFocus={()=>setShowSuggestions(true)}
                  onBlur={()=>setShowSuggestions(false)}
                  />
             <button className="border border-gray-400 rounded-r-full p-2 bg-gray-100">Search
             </button>
             </div>

         {showSuggestions && (
             <div className="fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg border-gray-200">
                 <ul >
                 {suggestions.map((s)=>(
                  <li className="py-2 px-3 shadow-sm hover:bg-gray-100">
                   ⚫{s}
                 </li>
                    ))}
                   
                    
                 </ul>    
            </div>
    )}
        </div>

     <div className="col-span-1">
              <img className="h-8" alt="user"
              src="https://cdn-icons-png.freepik.com/256/1077/1077114.png"/>

         </div>
      </div>
    )

}
export default Header;