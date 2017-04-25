import React, { Component } from 'react';

class BigImg extends Component {
  render() {
    return (
      <div className="styleLoadSpace">
                    <img className="styleLoad" src={this.props.photo} alt={this.props.title} />
                </div>
    );
  }
}

export default BigImg;


