import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    //add callbak function from App Component
    this.props.onTermSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div>
            <label>Search Videos</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onFormChange}
              placeholder="serach any video"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
