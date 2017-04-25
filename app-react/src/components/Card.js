import React, { Component } from 'react';


class Card extends Component {

  render() {
    const sizes = this.props.sizes.map((size, index) => <option key={size.id} value={index}>{size.title}</option>)

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
                        {sizes.length > 1 ?
                        <p className="control">
                          <span className="select is-fullwidth">
                            <select tabIndex="0" className="" onChange={(e) => this.props.setCurrentSize(e.target.value)}>
                              {sizes}
                            </select>
                          </span>
                        </p> : ''}<br />

                        <ul>
                            <li className="inline"><em className="price"> ${this.props.price}</em></li>
                            <li tabIndex="0" className="inline"><a tabIndex="0" className="button is-light purchase">I want it</a></li>
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
