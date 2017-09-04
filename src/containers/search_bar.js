import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
    super(props);

    this.state = {
      term: localStorage.getItem("previousTerm") || 'popular'
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.props.fetchPosts(this.state.term);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    // We need to fetch post data from the subreddit
    this.props.fetchPosts(this.state.term)

    localStorage.setItem("previousTerm", this.state.term);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group search-bar">
        <input 
          placeholder="Search for a subreddit"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          aria-describedby="search-bar-help"
        />
        <div id="search-bar-help" className="offscreen">
          For example, to see content from reddit.com/r/cats, enter "cats" and the first 25 posts on /r/cats will appear below.
        </div>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPosts}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);