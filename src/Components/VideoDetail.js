import React from "react";

const VideoDetail = ({ video }) => {
  return (
    <div>
      <div className="ui embed">
        <iframe
          title={video.snippet.title}
          src={`https://youtube.com/embed/${video.id.videoId}`}
          allowFullScreen="allowfullscreen"
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p className="ui content">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
