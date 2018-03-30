import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSeaarch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
const API_KEY = 'AIzaSyCxJdMK43fSH8dw9VrWOzPK2WVbpVJxNyk';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSeaarch({key: API_KEY, term: 'Southern Nights'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
