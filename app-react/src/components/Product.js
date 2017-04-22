import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Product extends Component {
  render() { 
    return (
          <div className="column is-one-quarter" title={this.props.title} onClick={() => browserHistory.push('/product/checkout/' + this.props.index)}>
        <div className="collectionImageBackground">
          <div className={"collectionImage" + this.props.className}>
            <img src={this.props.photo} alt={this.props.title} />
          </div>
        </div>
      </div>
    );
  }
}
  

export default Product;

