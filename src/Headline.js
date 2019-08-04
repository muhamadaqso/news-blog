import React, { Component } from 'react';
import axios from 'axios';
import Slider from 'react-animated-slider';
import './Headline.css';
import './slider-animation.css';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';


class Headline extends Component {
    constructor(props) {
        // Pass props to parent class
        super(props);
        // Set initial state
        this.state = {
          articles: []
        };
      }
    
      // Lifecycle method
      componentWillMount() {
        this.getArticles(this.props.default);
      }
    
      componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
          this.setState({ url: `https://newsapi.org/v2/top-headlines?sources=${nextProps.default}&apiKey=36158753ba86401092ac8dd0b249d3ee` });
    
          this.getArticles(nextProps.default);
        }
      }

    getArticles(url) {
        axios
          .get(`https://newsapi.org/v2/top-headlines?sources=${url}&apiKey=f0698be62b744db2abba4582a77df732`)
          .then(res => {
            const articles = res.data.articles;
            console.log(articles);
            this.setState({ articles: articles });
          })
          .catch(error => {
            console.log(error);
          });
      }

   render() {
    return(
        <div>
        <div className="wrapper">
            <h1>HEADLINE NEWS!</h1>
        </div>
        <Slider autoplay={3000} className="slider-wrapper">
            {this.state.articles.map((item, index) => (
                <div
                    key={index}
                    className="slider-content"
                    style={{ background: `url('${item.urlToImage}') no-repeat center center` }}>
                    <div className="center">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <button>READ MORE</button>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
    );
   }
    
}

export default Headline;