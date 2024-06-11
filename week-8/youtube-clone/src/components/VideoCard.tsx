function VideoCard(props: any) {
  return (
    <div className="p-2 cursor-pointer">
      <img src="/photo.jpg" className="rounded-xl"></img>
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1">
          <img className="rounded-full w-12 h-12" src={props.image}></img>
        </div>
        <div className="pl-2 col-span-11">
          <div>{props.title}</div>
          <div className="col-span-11 text-gray-400 text-base">
            {props.author}
          </div>
          <div className="col-span-11 text-gray-400 text-base">
            {props.views} | {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
