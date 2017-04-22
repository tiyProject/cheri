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
      <div className="carousel" ref={(divi) => { this.carousel = divi; }}>
        <div className="carousel-cell"><img className="stylesLoad" src={this.props.photo} /> </div>
        {this.props.photoTwo ? <div className="carousel-cell"><img className="stylesLoad" src={this.props.photoTwo} /> </div> : ''}
        {this.props.photoThree ? <div className="carousel-cell"><img className="stylesLoad" src={this.props.photoThree} /> </div> : ''}
      </div>
      </div>
    );
  }
}

export default CarouselImg;


