import React from 'react';
import moment from 'moment';

export default (props) => {
	return (
    <div className="panel panel-default">
      <div className="panel-body">
        <h3><a href={props.titleUrl}>{props.title}</a></h3>
        <p><a href={props.commentsUrl}>{props.commentsNumber} comments</a>, {props.upvotes} upvotes, {props.downvotes} downvotes</p>
        <p className="text-muted">Posted about {moment(new Date(props.created * 1000)).fromNow()} by {props.author}</p>
      </div>
    </div>
  );
}