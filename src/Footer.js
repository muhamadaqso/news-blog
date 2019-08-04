import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="appHeader">
      <div className="Logo">
      {/* <img className="scriptLogo" src={news_logo} alt="Javascript Logo" /> */}
        </div>

       <div className="title">
       <a className="smoothScroll" href="#">
           <i className="fa fa-2x fa-arrow-up" aria-hidden="true" />
         </a>
         <h4>
           Powered by
           <a href="https://newsapi.org/"> News API </a>🔥{''}
         </h4>
         <span className="coffee">
           Made with
           <i className="fa fa-coffee" aria-hidden="true" />
           by Wildan Muhamad Aqso
         </span>
       </div>
       



     </div>
    );
  }
}

export default Footer;
