import React, { Component } from 'react';


class Card extends Component {

  render() {
    return (
      <div className="card">
                    <header className="card-header">
                        <p className="card-header-title">
                          {this.props.title}
                        </p>
                    </header>
                    <div className="card-content">
                        <div className="content">
                           {this.props.description}
                        </div>
                        <ul>
                            <li className="inline"><em className="price"> ${this.props.price}</em></li>
                            <li className="inline"><a className="button is-light purchase">I want it</a></li>
                        </ul>
                    </div>
                </div>
    );
  }
}

export default Card;

// <div class="column is-7">
//                 <div class="card">
//                     <header class="card-header">
//                         <p class="card-header-title">
//                             Wow, a glam outfit !
//                         </p>
//                     </header>
//                     <div class="card-content">
//                         <div class="content">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Phasellus nec iaculis mauris.
//                         </div>
//                         <ul>
//                             <li class="inline"><em class="price">$PRICE</em></li>
//                             <li class="inline"><a class="button is-light purchase">I want it</a></li>
//                         </ul>
//                     </div>
//                 </div>
