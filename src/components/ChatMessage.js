const ChatMessage=({name,message})=>{
  return(
    <div className="flex items-center m-5 ">
       <img className="h-8" alt="user"
       src="https://cdn-icons-png.freepik.com/256/1077/1077114.png"/>
  <span className="font-bold px-4 shadow-sm">{name}</span>
  <span>{message}</span>
    </div>
  )

};
export default ChatMessage;