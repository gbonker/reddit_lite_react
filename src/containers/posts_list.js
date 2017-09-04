import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../components/post';

class PostsList extends Component {
	renderPost(postData) {
    const id = postData.data.id;
    const title = postData.data.title;
    const titleUrl =  postData.data.url;
    const commentsNumber = postData.data.num_comments;
    const commentsUrl = `https://www.reddit.com/${postData.data.permalink}`;
    const upvotes = postData.data.ups;
    const downvotes = postData.data.downs;
    const created = postData.data.created_utc;
    const author = postData.data.author;

    return (
      <Post 
        key={id}
        title={title}
        titleUrl={titleUrl}
        commentsNumber={commentsNumber}
        commentsUrl={commentsUrl}
        upvotes={upvotes}
        downvotes={downvotes}
        created={created}
        author={author}
        />
    );
  }

  render() {
    var posts = [];
    var prompt = '';
    if (this.props.posts[0] !== undefined) {
      posts = this.props.posts[0].data.children;
    } else {
      prompt = <div tabIndex="0">
        <p>Search for your favorite subreddit using the search bar above.</p>
        <p>Make sure you are spelling the subreddit correctly.</p>
      </div>
    }
    var term = localStorage.getItem("previousTerm");
    if (term === '' || term === null) {
      term = 'popular';
    }
    return (
      <div className="container">
        <h1 tabIndex="0">/r/{term}</h1>
        {prompt}
        {posts.map(this.renderPost)}
      </div>
    );
  }
} 

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(mapStateToProps)(PostsList);