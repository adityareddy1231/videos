import React from "react";
import VideoItem from "./VideoItem";

class RelatedVideos extends React.Component {
  render() {
    const videos = this.props.videos;

    const renderedList = videos.map(video => {
      return (
        <VideoItem
          key={video.id.videoId}
          video={video}
          onVideoSelect={this.props.onVideoSelect}
        />
      );
    });

    return (
      <div className="ui relaxed divided list">
        <h4>Related Videos</h4>
        {renderedList}
      </div>
    );
  }
}

export default RelatedVideos;
