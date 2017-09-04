import React from 'react';
import moment from 'moment';

export default (props) => {
	var comments = "comments";
  var upvotes = "upvotes";
  var downvotes = "downvotes";
  if (props.commentsNumber === 1) {
    comments = "comment";
  }
  if (props.upvotes === 1) {
    upvotes = "upvote";
  }
  if (props.downvotes === 1) {
    downvotes = "downvote";
  }
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <h3><a href={props.titleUrl} tabIndex="0">{props.title}</a></h3>
        <p><a href={props.commentsUrl} tabIndex="0">{props.commentsNumber} {comments}</a>, 
        	<span tabIndex="0"> {props.upvotes} {upvotes}</span>, 
        	<span tabIndex="0"> {props.downvotes} {downvotes}</span>
        </p>
        <p className="text-muted" tabIndex="0">Posted about {moment(new Date(props.created * 1000)).fromNow()} by {props.author}</p>
      </div>
    </div>
  );
}