import React from "react";

class SearchBar extends React.Component {
  state = { input: "" };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.input);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>
              <h2>Video Search</h2>
            </label>
            <input
              type="text"
              value={this.state.input}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
