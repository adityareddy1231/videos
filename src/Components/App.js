import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import RelatedVideos from "./RelatedVideos";

class App extends React.Component {
  state = { videos: [], selectedVideo: null, relatedVideos: [] };

  onSearchSubmit = async input => {
    this.setState({ selectedVideo: null });
    this.setState({ relatedVideo: null });
    const response = await youtube.get("/search", {
      params: { q: input, maxResults: 40 }
    });
    this.setState({ videos: response.data.items });
    console.log(response.data.items);
  };

  onVideoSelect = async video => {
    this.setState({ selectedVideo: video });
    const response = await youtube.get("/search", {
      params: {
        relatedToVideoId: video.id.videoId,
        type: "video",
        maxResults: 6
      }
    });
    this.setState({ relatedVideos: response.data.items });
  };

  render() {
    if (!this.state.selectedVideo) {
      return (
        <div className="ui container">
          <SearchBar onSearchSubmit={this.onSearchSubmit} />
          <div>
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          </div>
        </div>
      );
    }
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <RelatedVideos
                videos={this.state.relatedVideos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
