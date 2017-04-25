import React, { Component } from 'react';
import CarouselImg from '../components/CarouselImg';
import Card from '../components/Card';




class Sizes extends Component {
  constructor(props) {
        super(props)
      this.getPics=this.getPics.bind(this)
       this.state = {
           selected_size : {
                    id: 0,
                    title: '',
                    photo: '',
                    audio: '',
                    description: '',
                    styles:[{photo:""},{photo:""}]
                },
            product : {
                sizes:[{
                    id: 0,
                    title: '',
                    photo: '',
                    audio: '',
                    description: '',
                    styles:[{photo:""},{photo:""}]
                }]
            }
        }
    }
   

    componentDidMount() {
        fetch(window.apiHost + '/api/products/' + this.props.params.productId)
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(response => this.setState({product: response}))
        .then (cat => console.log(this.state.product))
    }

    getPics() {
        fetch(window.apiHost + '/api/products/' + this.props.params.productId)
    }
   

   

  render() {
    //   const sizes = this.state.product.sizes.map((size, index) => <Checkbox key={index} className={"size" + index} index={index} size_name={size.title} {...size} />)
    return (
          <div className="previewCard">
        <div className="columns">
            <div className="column is-5">
                    <CarouselImg photo={this.state.selected_size.photo} alt={this.props.title} photoTwo={this.state.selected_size.styles[0].photo} alt={this.props.title} photoThree={this.state.selected_size.styles[1].photo} alt={this.props.title}/>  
                
            </div>
            <div className="column is-7">
                <Card title={this.state.selected_size.title} description={this.state.selected_size.description} price={this.state.product.price} />
                 <input type="radio" name="size" value={this.state.product.title} onClick={(e) => this.getPics()} /> <label>{this.state.product.sizes[0].title}</label> 
        </div>
       
        </div>
    </div>
    );
  }
}

export default Sizes;

// size={this.state.product.}

// selected_size: response.product.sizes[0]}))