import { useState ,useRef,useEffect} from "react";


const Demo2=()=>{

const[y,setY]=useState(0);
let x=10;
const ref=useRef(0);
console.log("Rendering");
  // const i=useRef(null);
let i={

  current: null,
}

useEffect(()=>{
  if(i.current) return;
   i.current=setInterval(()=>{
    console.log("Namaste react",Math.random());
  },2000);

  return ()=> clearInterval(i.current);
},[]);

return (
    <div className="m-4 p-2 w-96 bg-slate-100 border border-black">
       <div>
          <button className="bg-green-200 px-2 m-4"
              onClick={()=>{
                x=x+1;
                console.log(x);
              }}>
              Increase x
          </button>
          <span className="font-bold text-xl"> Let={x}</span>
      
 <div>
 <div>
    <button className="bg-green-200 px-2 m-4"
    onClick={()=>{
      setY(y+1);
    }}>
    Increase Y
</button>
<span className="font-bold text-xl">State Y={y}</span>
</div>
</div>
<button
 className="bg-green-200 px-2 m-4"
 onClick={()=>{
  ref.current=ref.current+1;
  console.log("ref",ref.current);
}}>
Increase ref
</button>
<span className="font-bold text-xl">Ref={ref.current}</span>

</div>

<button className="bg-red-900 p-4 m-4 text-white font-bold rounded-lg"
onClick={()=>{
   clearInterval(i.current);
}}
>Stop Printing</button>
</div>
)

}
export default Demo2;