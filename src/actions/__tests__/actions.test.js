import { fetchPosts } from '../index';

describe('fetchPosts', () => {
	it('should have a type of "FETCH_POSTS"', function() {
    expect(fetchPosts().type).toEqual('FETCH_POSTS');
  });

  it('calls Reddit API on a subreddit and returns data', () => {
    expect.hasAssertions();
    expect.assertions(1);
    return expect(Promise.resolve(fetchPosts("news"))).resolves.toBeTruthy();
  });

  it('works with promises', () => {
    expect.assertions(1);
    return Promise.resolve(fetchPosts("news"))
      .then(data => 
        expect(data).toBeDefined()
    );
  });
});
