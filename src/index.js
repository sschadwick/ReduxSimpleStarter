import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// const API_KEY = '';

// Create a new component. This component should produce
// some html

const App = () => {
   return (
      <div>
         <SearchBar />
      </div>
   );
}
// Take this compoent's generated HTML and put ti on the page(in the DOM)

ReactDOM.render(<App />, document.querySelector(".container"));
