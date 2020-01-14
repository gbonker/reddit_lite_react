## [RedditLite](https://redditlite.herokuapp.com)

RedditLite allows the user to search for any subreddit and view the most popular posts on that subreddit. Users can see posts' titles, upvotes, downvotes, author and approximate time posted, along with links to the posts' content and comments sections.


## Setup

RedditLite can be accessed live at https://redditlite.herokuapp.com. 

To run the app locally, simply clone or download this repository, `cd` into it, and run `npm install` and `npm start`. The app can then be accessed in the browser at `localhost:3000`.


## Stack

- React, version 15.6.1
- Redux, version 3.7.2
- Bootstrap, version 3.3.7
- Reddit API

See `package.json` for more information. Additional packages include `axios`, `moment.js`, `react-redux` and `redux-promise`.


## Features

- Access any subreddit in a more modern-feeling, user-friendly way. 
- Click on any link to visit that content, and then return to the app without losing search results.
- If the user enters an invalid subreddit name, the app provides the user with an error message to help them find a valid subreddit.
- Works on any mobile phone or tablet. Made responsive with Twitter Bootstrap.
- 100% test coverage with `Jest`.
- Tested and verified for accessibility using the ChromeVox screen reader and the keyboard. Works for users who use only the keyboard, screen readers, and similar assistive technologies.


## Questions


1. How is your code structured, and why?

Since I used both React and Redux for this project, the app's `src` directory contains folders for actions, components, containers, reducers and style (CSS). Inside the actions, components and reducers directories are folders called `__tests__` for unit testing with Jest. Containers help manage state with Redux, and components only use React's application-level state. The action `fetchPosts` is used to call the Reddit API with a `GET` request, the reducer function returns the new state of the application as the result of `fetchPosts`, and finally the results are rendered on the DOM with the containers and components. 

I used Redux because middleware helps to do a lot of the heavy lifting of making third-party API calls, and handles errors much more gracefully out-of-the-box than React applications on their own. I used React because its component convention and partnership with Redux both make a lot of sense for this project. Bootstrap provides standard, modern and responsive interaction design and visual design right away as well. Jest makes unit testing much more straightforward using its file structure convention and its `describe`, `it` and `test` syntax for testing functions.


2. How does updated data change your application’s state?

The `App` component does not handle state, but its two child components, `SearchBar` and `PostsList`, manage state using the Redux functions `mapDispatchToProps` and `mapStateToProps` respectively. `SearchBar`'s React-level state contains the search term, which changes via the `onInputChange` function every time the user edits the input field in the search bar. In order to ensure that the user can click on any link on the page and return to the application without losing the search term or results, the search term gets stored in `localStorage` as `previousTerm` every time the user performs a search. `PostsList`'s React-level state contains the posts' data, which it receives from the reducer and then renders using its child component `Post`. Therefore, whenever the user performs a new search, the state updates, which causes the UI to update.


3. In your opinion, what are the pros and cons of how your views are rendered?

My views are rendered in a straightforward, hierarchical way, both from a user experience and code structure standpoint. From a UX perspective, the search bar appears at the top of the page all the time, no matter where on the page the user scrolls, so the user can begin a new search from wherever they are on the page. Having the search bar on top and the posts appear as a list or feed view is a standard design convention that utilizes progressive disclosure and information hierarchy very well, and users are used to this type of pattern. From a development perspective, each component is only aware of the pieces of state that it needs to know about, which optimizes performance and minimizes uneccessary storage. An important advantage of React is the reusability of components, which I utilized in this application, especially with the `Post` component. React also only rerenders the components it needs to whenever the state that manages those components changes, which optimizes performance and prevents the need for page refreshes or unnecessary loading on the browser's behalf.

Even though my views are rendered mostly according to convention, a few aspects could be improved. There is probably a better way to preserve the user's previous search term than using `localStorage`, such as by storing the search term in the `App` component's state, thereby "lifting the state up," or by using a Redux function to pass the search term from the `SearchBar` container to the `PostsList` container. Additionally, some of my `render` functions contain logic that defines certain variables, such as `posts` in `PostsList` and the `comments`, `upvotes` and `downvotes` variables in `Post`. These could be further ironed out by filtering through the API response before that data gets to the container, such as in that reducer function, and by making a `pluralize` function that would check if a piece of data equaled 1, and if so, change its label to its singular form. Additionally, this app has the potential for more varied, strategically-placed and helpful error messages if the user enters an invalid subreddit.


4. If you were going to add a feature like login, how would your app’s architecture
change?

If I were to add authentication to this application, I would need to create Sign Up and Log In pages using `react-router` and `react-router-dom`, which I would put links to in the header. I would also probably want a more robust back-end in that case, so I would consider using Node and Express to handle the server-side logic. Since users of this app most likely already have Reddit accounts, I would also try to implement a feature that would allow the user to log in directly with their Reddit account. That way, their default API call would be to their personalized home page on Reddit, which would contain the most prominent posts from all of the subreddits they are subscribed to. This would require changing the action and/or reducer functions to check for authentication as well.


## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
