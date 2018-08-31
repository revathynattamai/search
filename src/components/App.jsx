import React, { Component } from "react";
import { render } from "react-dom";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      response: ""
    };
  }

  onInputChange() {
    this.setState(
      {
        title: this.title.value
      },
      () => this.httpGet()
    );
  }

  httpGet() {
    let theUrl = `http://www.omdbapi.com/?t=${
      this.state.title
    }&apikey=795e4ddc`;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send(null);
    this.setState({
      response: JSON.parse(xmlHttp.responseText)
    });
  }

  render() {
    return (
      <div>
        <h1>Search</h1>
        <input
          type="text"
          onChange={this.onInputChange.bind(this)}
          ref={n => (this.title = n)}
        />
        <input type="button" value="search" />
        <div>
          {this.state.response && <img src={this.state.response.Poster} />}
        </div>
      </div>
    );
  }
}

export default App;
