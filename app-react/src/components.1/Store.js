import React, { Component } from 'react';

class Store extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Store;

