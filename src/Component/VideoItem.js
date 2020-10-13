import "./Video.css";
import React from "react";

const VideoItem = ({ video, onSelectVideo }) => {
  return (
    <div
      className="item"
      onClick={() => {
        onSelectVideo(video);
      }}
    >
      <img
        alt="{video.snippet.title}"
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      ></img>
      <div className="content">
        <div
          className="header"
          dangerouslySetInnerHTML={{ __html: `${video.snippet.title}` }}
        ></div>
      </div>
    </div>
  );
};

export default VideoItem;
