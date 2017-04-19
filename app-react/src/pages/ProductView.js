import React, { Component } from 'react';
import CarouselImg from '../components/CarouselImg';
import BigImg from '../components/BigImg';
import Card from '../components/Card';
import StyleImg from '../components/StyleImg';
import Iam from '../components/Iam';

window.audioPlayer = document.querySelector('#audioPlayer')

class ProductView extends Component {
    constructor(props) {
        super(props)
        this.setCurrentSize = this.setCurrentSize.bind(this)

        this.state = {
            currentSize: 0,
            product: {
                sizes: [{
                    id: 0,
                    title: '',
                    photo: '',
                    audio: '',
                    description: '',
                    styles: [{ photo: "" }, { photo: "" }]
                }]
            }
        }
    }

    componentWillMount() {
        fetch(window.apiHost + '/api/products/' + this.props.params.productId)
            .then(response => response.json())
            // .then(response => console.log(response))
            .then(response => this.setState({ product: response }))
            .then(r => {
                window.audioPlayer.pause()
                // window.audioPlayer.src = this.state.product.sizes[0].audio
                // window.audioPlayer.play()
            })
    }

    setCurrentSize(index) {
        this.setState({currentSize: index})
    }


    render() {
        console.log(this.state.product)
        const currentSize = this.state.product.sizes[this.state.currentSize]

        return (
            <div>
                <Iam justLogo={true} />
                <div className="previewCard">
                    <div className="columns">
                        <div className="column is-5">
                            {currentSize.styles.length < 3 ?
                                <CarouselImg photo={currentSize.photo} photoTwo={currentSize.styles[0] ? currentSize.styles[0].photo : ''} photoThree={currentSize.styles[1] ? currentSize.styles[1].photo : ''} /> :
                                <BigImg photo={currentSize.photo} />
                            }
                        </div>
                        <div className="column is-7">
                            <Card title={currentSize.title} description={currentSize.description} price={this.state.product.price} setCurrentSize={this.setCurrentSize} sizes={this.state.product.sizes} />

                            {currentSize.styles.length === 3 ?
                                <div className="thumbNailStyles is-hidden-tablet-only is-hidden-mobile">
                                    <div className="columns is-multiline">
                                        {currentSize.styles[0] ? <StyleImg photo={currentSize.styles[0].photo} /> : ''}
                                        {currentSize.styles[1] ? <StyleImg photo={currentSize.styles[1].photo} /> : ''}
                                        {currentSize.styles[2] ? <StyleImg photo={currentSize.styles[2].photo} /> : ''}
                                    </div>
                                </div> :
                                ''}

                        </div>
                    </div>

                    {currentSize.styles.length === 3 ?
                        <div className="thumbNailStyles is-hidden-desktop">
                            <div className="columns is-multiline">
                                {currentSize.styles[0] ? <StyleImg photo={currentSize.styles[0].photo} /> : ''}
                                {currentSize.styles[1] ? <StyleImg photo={currentSize.styles[1].photo} /> : ''}
                                {currentSize.styles[2] ? <StyleImg photo={currentSize.styles[2].photo} /> : ''}
                            </div>
                        </div> :
                        ''}

                </div>
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