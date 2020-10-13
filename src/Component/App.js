import React from "react";
import "./Video.css";
import SearchBar from "./SearchBar";
import youtube from "../apis/youTube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
const KEY = "AIzaSyA1pPUtdBbzWKRsLXvX_AbM6pl5gCzSXHQ";
class App extends React.Component {
  state = { videos: [], SelectedVideo: null };
  componentDidMount() {
    this.onTermSubmit("roses");
  }

  onTermSubmit = async (term) => {
    //  console.log(term);
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
      },
    });
    //console.log(response.data.items);
    this.setState({
      videos: response.data.items,
      SelectedVideo: response.data.items[0],
    });
  };

  onSelectVideo = (video) => {
    this.setState({ SelectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.SelectedVideo} />
            </div>
            <div className="four wide column">
              <VideoList
                videos={this.state.videos}
                onSelectVideo={this.onSelectVideo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
