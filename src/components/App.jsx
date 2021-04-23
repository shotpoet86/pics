import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {
  state = { images: [] };

  /*function pulls up 'term' from child 'SearchBar' class,
	takes in 'term' from 'SearchBar' class as argument using props*/
  onSearchSubmit = async (term) => {
    try {
      const res = await unsplash.get('/photos', {
        params: {
          query: term,
        },
      });
      return this.setState({ images: res.data });
    } catch (e) {
      console.log(e);
      console.log('could not fetch photos');
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        {/*displays 'onSearchSubmit' function which returns 'term' from 'onSearchSubmit' class*/}
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>

    );
  }
}

export default App;
