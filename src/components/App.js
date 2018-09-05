import React, { Component } from "react";
import { render } from "react-dom";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      response: []
    };
  }

  //   handleChange() {
  //       this.setState ({
  //           title: this.title.value
  //       },()=>{this.httpGet()});
  //   }

  httpGet() {
    fetch("/search")
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          title: this.title.value,
          response: myJson
        });
      });
  }

  getTable() {
    let result = this.state.response.transactions;
    if (result) {
      return (
        <table>
          <thead>
            <tr>
              <th>DESCRIPTION</th>
              <th>TYPE</th>
              <th>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {result.map((res, i) => (
              <tr key={i}>
                <td>{res.description}</td>
                <td>{res.payment_type}</td>
                <td>{res.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Search</h1>
        <input
          type="text"
          onChange={this.httpGet.bind(this)}
          ref={n => {
            this.title = n;
          }}
        />
        <button>Search</button>
        {this.getTable()}
      </div>
    );
  }
}

export default App;
