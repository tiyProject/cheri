import React, { Component } from 'react';

class Checkout extends Component {
  render() {
    return (
      <div className="columns">
      <div className="column is-half">
        <div className="frameRed">
          <div className="orderImage">
            <img src={this.props.sizes[0].photo} alt={this.props.sizes[0].title} />
          </div>
        </div>
      </div>
      <div className="column">
      <div className="column is-half">
        <div className="frameRed">
        <div className="order">
        <header className="card-header">
          <p className="card-header-title">
            {this.props.title}
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Checkout;