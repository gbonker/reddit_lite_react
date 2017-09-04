import rootReducer from '../index';
import axios from 'axios';

describe('rootReducer', function() {
  it('should return the initial state', function() {
    expect(rootReducer(undefined, {})).toEqual({
      posts: []
    });
  });

  it('should react to an action with the type FETCH_POSTS', function() {
    var term = 'news';
    const ROOT_URL = 'https://www.reddit.com/r/';
    const url = `${ROOT_URL}${term}.json`;
    const request = axios.get(url);

    expect(rootReducer({}, {
      type: 'FETCH_POSTS',
      payload: request
    })).toBeDefined();
  });
});