import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading!!</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="ui segment">
      <iframe
        title="video player"
        src={videoSrc}
        width="100%"
        height="350"
        allowFullScreen
      ></iframe>

      <h4
        className="header"
        dangerouslySetInnerHTML={{ __html: `${video.snippet.title}` }}
      ></h4>
      <div className="content">
        <p
          dangerouslySetInnerHTML={{ __html: `${video.snippet.description} ` }}
        ></p>
        ;
      </div>
    </div>
  );
};

export default VideoDetail;
