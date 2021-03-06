import React, { Component } from "react";
import { render } from "react-dom";
import styles from './styles.less';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      result: []
    };
    this.searchTermChange = this.searchTermChange.bind(this);
    this.myRef = React.createRef();
  }

  getSearchResults() {
    fetch("/search")
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        const newResults = myJson.transactions.filter((res) => {
         return res.description.toLowerCase().includes(this.state.searchTerm)
          });
          this.setState({ result: newResults});  
      });
  }

  getTable() {
    if (this.state.result) {
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
            {this.state.result.map((res, i) => (
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

  searchTermChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>Search</h1>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.searchTermChange}
        />
        <button onClick={() => this.getSearchResults()}>Search</button>
        {this.state.result.length > 0 && this.getTable()}
      </div>
    );
  }
}

export default App;
