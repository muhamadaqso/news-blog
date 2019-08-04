import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';
import './Search.css';
import Footer from './Footer.js';
import './Footer.css';
import news from './images/news.png';
import Headline from './Headline.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="appHeader">
         <div className="Logo">
           </div>

          <div className="title">
          <img className="scriptLogo" src={news} alt="Javascript Logo" />
          </div>

        </div>
        <Headline default="bbc-news"/>
        <Search default="bbc-news" />
        <Footer />
      </div>
    );
  }
}

export default App;
