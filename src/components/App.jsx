import React, { Component } from 'react';
import '../App.css';
import SearchBar from './SearchBar';

class App extends Component {
  /*function pulls up 'term' from child 'SearchBar' class,
  takes in 'term' from 'SearchBar' class as argument using props*/
  onSearchSubmit = (term) => {
    console.log(term);
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        {/*displays 'onSearchSubmit' function which returns 'term' from 'onSearchSubmit' class*/}
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
