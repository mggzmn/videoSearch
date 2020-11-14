import React from "react";
import "./VideoItem.styles.css";

const VideoItem = ({ video, onVideoSelect }) => {
  const { snippet } = video;
  return (
    <div onClick={() => onVideoSelect(video)} className="item video-item">
      <img
        className="ui image"
        src={snippet.thumbnails.medium.url}
        alt={snippet.title}
      />
      <div className="content">
        <div className="header">{snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
