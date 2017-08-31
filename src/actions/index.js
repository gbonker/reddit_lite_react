import axios from 'axios';

const ROOT_URL = 'https://www.reddit.com/r/';

export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts(subreddit) {
	const url = `${ROOT_URL}${subreddit}.json`;
  const request = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}