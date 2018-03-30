import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSeaarch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyCxJdMK43fSH8dw9VrWOzPK2WVbpVJxNyk';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] }

    YTSeaarch({key: API_KEY, term: 'Sourthen Nights'}, (videos) => {
      this.setSate({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
