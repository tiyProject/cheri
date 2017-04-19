import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Category extends Component {
  render() {
    return (
      <div className="column is-one-quarter" title={this.props.title} onClick={() => browserHistory.push('/products/' + this.props.id)}>
        <div className="collectionImageBackground">
          <div className={"collectionImage" + this.props.className}>
            <img src={this.props.photo} alt={this.props.title} />
          </div>
        </div>
      </div>
    );
  }
}

export default Category;


    // <div class="columns is-multiline is-mobile">
    //   <div class="column is-one-quarter">
    //     <div class="frameA">
    //       <img class="titleImg" src="/img/cat1.jpeg" />
    //     </div>
    //   </div>
    //   <div class="column is-one-quarter">
    //     <div class="frameB">
    //       <img class="titleImg" src="/img/cat2.jpg" />
    //     </div>
    //   </div>
    //   <div class="column is-one-quarter">
    //     <div class="frameC">
    //       <img class="titleImg" src="/img/cat3.jpg" />
    //     </div>
    //   </div>
    //   <div class="column is-one-quarter">
    //     <div class="frameD">
    //       <img class="titleImg" src="/img/cat4.jpeg" />
    //     </div>
    //   </div>
    // </div>