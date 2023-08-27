import React, { Component } from 'react'

export class Newsitems extends Component {
  render() {
     let   {title, description, nurl, newsurl} = this.props
    return (
    <div>
        <div className="card" style={{width: "18rem"}}>
            <img src={nurl ? nurl:"https://www.livemint.com/lm-img/img/2023/08/25/600x338/32inch_tv_1692962182929_1692962183474.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsurl} rel="noreferrer" target='_blank' className="btn btn-sm btn-secondary d-flex justify-content-center">Read More</a>
            </div>
        </div>
    </div>
    )
  }
}

export default Newsitems
