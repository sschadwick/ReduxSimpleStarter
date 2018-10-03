import React from 'react';
import ReactDOM from 'react-dom'

// Create a new component. This component should produce
// some html

const App = function(){
  return <div>Hi!</div>;
}
// Take this compoent's generated HTML and put ti on the page(in the DOM)

ReactDOM.render(App);
