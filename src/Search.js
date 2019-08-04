import React, { Component } from 'react';
import axios from 'axios';
import Display from './Display.js';
import './Display.css';
import Outlet from './Outlet.js';
import './Outlet.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      count: 0,
      value: this.props.default
    };
    this.handleChange = this.handleChange.bind(this);

    this.apiUrl = `https://newsapi.org/v2/sources?language=en&apiKey=f0698be62b744db2abba4582a77df732`;
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }

  componentWillMount() {
    axios.get(this.apiUrl).then(res => {
      this.setState({ data: res.data.sources });
      this.setState({ count: res.data.sources.length });
      console.log(this.state.value);
    });
  }

  render() {
    return (
      <div className="">
        <h4>Select from {this.state.count} News Outlets</h4>
        <select value={this.state.value} onChange={this.handleChange}>
          >
          {this.state.data.map((outlet, i) => {
            return (
              <option key={i} value={outlet.id}>
                {outlet.name}
              </option>
            );
          })}
        </select>
        <Outlet default={this.state.value} />
        <Display default={this.state.value} />
      </div>
    );
  }
}

export default Search;
