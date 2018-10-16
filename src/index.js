import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
// const API_KEY = '';


class App extends Component{
   constructor(props){
      super(props);

      this.state = { videos: [] };

      YTSearch({key: API_KEY, term: 'chrisFix'}, (videos)=>{
         // this.setState( {videos: videos}); //key and property are the same.
         this.setState( { videos } );
      });
   }
   render(){
      return (
         <div>
            <SearchBar />
            <VideoList videos={this.state.videos} />
         </div>
      )
   }
}
ReactDOM.render(<App />, document.querySelector(".container"));
