import React, { Component } from 'react'

export class Newsitems extends Component {
  render() {
     let   {title, description, nurl, newsurl} = this.props
    return (
    <div>
        <div className="card" style={{width: "18rem"}}>
            <img src={nurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsurl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
    </div>
    )
  }
}

export default Newsitems
