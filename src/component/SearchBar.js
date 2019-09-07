import React, { Component } from "react";
import "../styles/SearchBar.css";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      term: ""
    };
    this.InputChange = this.InputChange.bind(this);
    this.EnterSearch = this.EnterSearch.bind(this);
  }

  InputChange(event) {
    const { value } = event.target;
    this.setState({
      term: value
    });
  }

  EnterSearch(event) {
    event.preventDefault();

    this.props.onTermSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.EnterSearch}>
          <div className="field">
            <label htmlFor="search-bar-input">Video Search</label>
            <input
              id="search-bar-input"
              type="text"
              value={this.state.term}
              onChange={this.InputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
