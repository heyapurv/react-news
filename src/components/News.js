import React, { Component } from 'react';
import Newsitems from './Newsitems';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=Technology&apiKey=${process.env.REACT_APP_APIKEY}&page=1&pageSize=21`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
  }
  

  handleNexBtn = async()=>{
    if (this.state.page+1 > Math.ceil(this.state.totalResults/18)){}
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=Technology&apiKey=${process.env.REACT_APP_APIKEY}&page=${this.state.page+1}&pageSize=18`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1 ,
        articles: parsedData.articles 
      })
    }
    
  }
  handlePreBtn = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=Technology&apiKey=${process.env.REACT_APP_APIKEY}&page=${this.state.page-1}&pageSize=18`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1 ,
      articles: parsedData.articles 
    })
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className='mx-4 text-center text-decoration-underline'>STRiiXER - Headlines of the Week</h1>
        <div className="row my-4 mx-4">
          {this.state.articles && this.state.articles.map((element, index) => (  // checking whether the array is empty or not
            <div className="col-md-4 my-4" key={index}>
              <Newsitems
                title={element.title ? element.title.slice(0, 45) : ""}
                description={element.description ? element.description.slice(0, 90) : ""}
                nurl={element.urlToImage}
                newsurl={element.url}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-around">
        <button disabled={this.state.page<=1} type="button"  onClick={this.handlePreBtn} className="btn btn-info">&lt;&lt;&lt;</button>
        <button disabled={this.state.page>=Math.ceil(this.state.totalResults/18)} type="button" onClick={this.handleNexBtn} className="btn btn-info">&gt;&gt;&gt;</button>
        </div>
      </div>
    );
  }
}

export default News;
