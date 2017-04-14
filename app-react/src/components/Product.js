import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Product extends Component {
  render() {
    return (
      <div className="column is-one-quarter" onClick={() => browserHistory.push('/product/' + this.props.id)}>
        <div className="frameRed">
          <div className="productImage">
            <img src={this.props.sizes[0].products} alt={this.props.sizes[0].title} />
          </div>
        </div>
      </div>
    );
  }
}

export default Product;

