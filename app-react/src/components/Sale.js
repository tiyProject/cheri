import React, { Component } from 'react';

class Sale extends Component {
  render() {
    return <div>
        <div className={"collectionImage" + this.props.className}>
                <img src={this.props.photo} alt={this.props.title} />
        </div>
        </div>
    
  }
}

 export default Sale;       