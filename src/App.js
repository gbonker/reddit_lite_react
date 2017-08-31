import React, { Component } from 'react';
import './App.css';

import SearchBar from './containers/search_bar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">RedditLite</a>
            </div>
            <SearchBar />
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
