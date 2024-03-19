

const commentsData=[
 {
            name:"Akshay saini",
            text:"Lorem ipsum dolor sit amet,consectetur adip",
            repiles:[],
            
        },
        {
            name:"Akshay saini",
            text:"Lorem ipsum dolor sit amet,consectetur adip",
            repiles:[
                {
                    name:"Akshay saini",
                    text:"Lorem ipsum dolor sit amet,consectetur adip",
                    repiles:[],
             
                 },
             {
                 name:"Akshay saini",
                 text:"Lorem ipsum dolor sit amet,consectetur adip",
                 repiles:[],
             
              },
    ],
},
{
       name:"Akshay saini",
       text:"Lorem ipsum dolor sit amet,consectetur adip",
       repiles:[],

    },
{
    name:"Akshay saini",
    text:"Lorem ipsum dolor sit amet,consectetur adip",
    repiles:[],

},
{
    name:"Akshay saini",
    text:"Lorem ipsum dolor sit amet,consectetur adip",
    repiles:[],
},
{
    name:"Akshay saini",
    text:"Lorem ipsum dolor sit amet,consectetur adip",
    repiles:[],
},
];
 const Comment=({data})=>{
    const{name,text,replies}=data;
 
 
       return (
             <div className="flex shadow-sm bg-gray-200 p-2 rounded-lg">
         <img className="w-12 h-12" alt="user" 
         src="https://cdn-icons-png.freepik.com/256/1077/1077114.png"/>
                <div className="px-3">
                      <p className="font-bold">{name}</p>
                      <p>{text}</p>
                </div>
               </div>
         );
      };
     const CommentsList=({comments})=>{
        return (
            <div>
          { comments &&
             comments.map((comment,index)=>(
            <div key={index}   >
                <Comment data={comment}/>
            <div className="pl-5 border border-l-black ml-5">
                <CommentsList comments={comment.replies}/>
                
              </div>
          </div>
            ))
        }
        </div>
        );
      };
const CommentsContainer=()=>{
    return (
         <div className="m-5 p-2">
            <h1 className="text-2xl font-bold">Comments : </h1>
                <CommentsList comments={commentsData}/>
            </div>

    );
};
export default CommentsContainer;