import React from "react";
import Spinner from "../Spinner/Spinner";
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div className="spinner-container"><Spinner /></div>;
  }
  const { title, description } = video.snippet;
  const videoSrc = `https:/www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title={title} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
