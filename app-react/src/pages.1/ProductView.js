import React, { Component } from 'react';
import CarouselImg from '../components/CarouselImg';
import BigImg from '../components/BigImg';
import Card from '../components/Card';
import StyleImg from '../components/StyleImg';

class ProductView extends Component {
  constructor(props) {
        super(props)
        this.state = {
            product : {
                sizes:[{
                    id: 0,
                    title: '',
                    photo: '',
                    audio: '',
                    description: '',
                    styles:[]
                }]
            }
        }
    }

    componentWillMount() {
        fetch(window.apiHost + '/api/products/' + this.props.params.productId)
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(response => this.setState({product: response}))
    }

   

  render() {
      console.log (this.state.product)
    return (
          <div className="previewCard">
        <div className="columns">
            <div className="column is-5">
                {this.state.product.sizes[0].styles.length < 3 ?
                    <CarouselImg photo={this.state.product.sizes[0].photo} /> :
                    <BigImg photo={this.state.product.sizes[0].photo} />
                }
            </div>
            <div className="column is-7">
                <Card title={this.state.product.sizes[0].title} description={this.state.product.sizes[0].description} price={this.state.product.price}/>

                {this.state.product.sizes[0].styles.length === 3 ?
                    <div className="thumbNailStyles is-hidden-tablet-only is-hidden-mobile">
                        <div className="columns is-multiline">
                            {this.state.product.sizes[0].styles[0] ? <StyleImg photo={this.state.product.sizes[0].styles[0].photo}/> : ''}
                            {this.state.product.sizes[0].styles[1] ? <StyleImg photo={this.state.product.sizes[0].styles[1].photo}/> : ''}
                            {this.state.product.sizes[0].styles[2] ? <StyleImg photo={this.state.product.sizes[0].styles[2].photo}/> : ''}
                        </div>
                    </div> :
                    ''}

            </div>
        </div>

        {this.state.product.sizes[0].styles.length === 3 ?
            <div className="thumbNailStyles is-hidden-desktop">
                <div className="columns is-multiline">
                    {this.state.product.sizes[0].styles[0] ? <StyleImg photo={this.state.product.sizes[0].styles[0].photo}/> : ''}
                    {this.state.product.sizes[0].styles[1] ? <StyleImg photo={this.state.product.sizes[0].styles[1].photo}/> : ''}
                    {this.state.product.sizes[0].styles[2] ? <StyleImg photo={this.state.product.sizes[0].styles[2].photo}/> : ''}
                </div>
            </div> :
            ''}

    </div>
    );
  }
}

export default ProductView;

// <div className="column is-7">
//                 <div className="card">
//                     <header className="card-header">
//                         <p className="card-header-title">
//                             Wow, a glam outfit !
//                         </p>
//                     </header>
//                     <div className="card-content">
//                         <div className="content">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Phasellus nec iaculis mauris.
//                         </div>
                            // <div className="field">
                            //   <label className="label">Size</label>
                            //   <p className="control">
                            //     <span className="select">
                            //       <select>
                            //         <option>XSMALL</option>
                            //         <option>SMALL</option>
                             //        <option>MEDIUM</option> 
                             //        <option>LARGE</option> 
                            //       </select>
                            //     </span>
                            //   </p>
                            // </div>
//                         <ul>
//                             <li className="inline"><em className="price">$PRICE</em></li>
//                             <li className="inline"><a className="button is-light purchase">I want it</a></li>
//                         </ul>
//                     </div>
//                 </div>