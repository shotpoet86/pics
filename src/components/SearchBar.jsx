import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };
  /*function 'onFormSubmit' takes 'event' from 'onSubmit' i.e 'enter' as argument, then
   * calls 'this.props.onSubmit' and passes current state as argument which is stored in 'term'*/
  onFormSubmit = (event) => {
    /*prevents page from refreshing until user is done by pressing 'enter'*/
    event.preventDefault();
    this.props.onSubmit(this.state.term);
    console.log(this.props);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form" action="">
          <div className="field">
            <label htmlFor="">Image Search: </label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
