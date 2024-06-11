import VideoCard from "./VideoCard";

const VIDEOS = [
  {
    title: "Kajal Agarwal song | teaser | New Movie",
    image: "photo.jpg",
    thumbImage: "photo.jpg",
    author: "Akshay Chavan",
    views: "100k",
    timestamp: "2 days ago",
  },
  {
    title: "Shahrukh Khan song | teaser | New Movie",
    image: "photo.jpg",
    thumbImage: "photo.jpg",
    author: "Akshay Chavan",
    views: "100k",
    timestamp: "2 days ago",
  },
  {
    title: "Salman Khan song | teaser | New Movie",
    image: "photo.jpg",
    thumbImage: "photo.jpg",
    author: "Akshay Chavan",
    views: "100k",
    timestamp: "2 days ago",
  },
  {
    title: "Salman Khan song | teaser | New Movie",
    image: "photo.jpg",
    thumbImage: "photo.jpg",
    author: "Akshay Chavan",
    views: "100k",
    timestamp: "2 days ago",
  },
  {
    title: "Salman Khan song | teaser | New Movie",
    image: "photo.jpg",
    thumbImage: "photo.jpg",
    author: "Akshay Chavan",
    views: "100k",
    timestamp: "2 days ago",
  },
  {
    title: "Salman Khan song | teaser | New Movie",
    image: "photo.jpg",
    thumbImage: "photo.jpg",
    author: "Akshay Chavan",
    views: "100k",
    timestamp: "2 days ago",
  },
  {
    title: "Salman Khan song | teaser | New Movie",
    image: "photo.jpg",
    thumbImage: "photo.jpg",
    author: "Akshay Chavan",
    views: "100k",
    timestamp: "2 days ago",
  },
  {
    title: "Salman Khan song | teaser | New Movie",
    image: "photo.jpg",
    thumbImage: "photo.jpg",
    author: "Akshay Chavan",
    views: "100k",
    timestamp: "2 days ago",
  },
];

export function VideoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      {VIDEOS.map((video) => (
        <div>
          <VideoCard
            title={video.title}
            image={video.image}
            thumbImage={video.thumbImage}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
          />
        </div>
      ))}
    </div>
  );
}
