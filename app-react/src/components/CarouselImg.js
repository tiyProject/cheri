import React, { Component } from 'react';
import Flickity             from 'flickity';

class CarouselImg extends Component {

componentDidMount() {
        const carousel = this.carousel;
        const options = {
            setGallerySize: false
        }

        this.flkty = new Flickity(carousel, options);
    }

  render() {
    return (
      <div className="styleLoadSpace">
      <div tabIndex="0" className="carousel" ref={(divi) => { this.carousel = divi; }}>
        <div tabIndex="0" className="carousel-cell"><img className="stylesLoad" src={this.props.photo} alt={this.props.title} /> </div>
        {this.props.photoTwo ? <div tabIndex="0" className="carousel-cell"><img className="stylesLoad" src={this.props.photoTwo} alt={this.props.title}/> </div> : ''}
        {this.props.photoThree ? <div tabIndex="0" className="carousel-cell"><img className="stylesLoad" src={this.props.photoThree} alt={this.props.title}/> </div> : ''}
      </div>
      </div>
    );
  }
}

export default CarouselImg;


