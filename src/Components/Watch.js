import React, { useState } from 'react';

// Video list - replace with real video links or API data
const videoList = [
  {
    id: 1,
    title: "Premier League Highlights",
    videoUrl: "https://www.youtube.com/embed/49bPz5eL0KY", // Embed URL from YouTube
    thumbnailUrl: "https://img.youtube.com/vi/49bPz5eL0KY/hqdefault.jpg",
  },
  {
    id: 2,
    title: "UEFA Champions League Final Highlights",
    videoUrl: "https://www.youtube.com/embed/4JnrIdLJauE",
    thumbnailUrl: "https://img.youtube.com/vi/4JnrIdLJauE/hqdefault.jpg",
  },
  {
    id: 3,
    title: "World Cup 2022 Final Highlights",
    videoUrl: "https://www.youtube.com/embed/xR63nMzK1Ic",
    thumbnailUrl: "https://img.youtube.com/vi/xR63nMzK1Ic/hqdefault.jpg",
  },
];
const Watch = () => {
    const [selectedVideo, setSelectedVideo] = useState(videoList[0]);

    const handleVideoSelect = (video) => {
      setSelectedVideo(video);
    };
    return (
        <div className="container">
      <h2>Football Video Player</h2>

      {/* Video Player */}
      <div className="video-player">
        <iframe
          width="100%"
          height="500px"
          src={selectedVideo.videoUrl}
          title={selectedVideo.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Video List */}
      <div className="video-list mt-4">
        <h3>More Football Videos</h3>
        <div className="row">
          {videoList.map((video) => (
            <div className="col-4" key={video.id}>
              <div className="video-thumbnail" onClick={() => handleVideoSelect(video)}>
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="img-fluid"
                  style={{ cursor: 'pointer', borderRadius: '8px' }}
                />
                <p>{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
}



export default Watch;