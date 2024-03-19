const VideoCard=({info})=>{
    // console.log(info);
   
    const {snippet,statistics}=info;
    const{channelTitle,title,thumbnails}=snippet;

return(
    <div className="shadow-lg text-lg">
    <img className="rounded-lg" alt="thumbnail"src={thumbnails.medium.url}/>
    <ul>
     <li className="font-bold">{title}</li>
     <li>{channelTitle}</li>
     <li>{statistics.viewCount}views</li>
    </ul>
</div>

)

};
export const AdVideoCard=({info})=>{

    return(
        <div className="p-1 m-1 border border-red-900">
    <VideoCard info={info}/>
    </div>
    );
};
export default VideoCard;