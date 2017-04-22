import React, { Component } from 'react';
import { browserHistory } from 'react-router';
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
        this.getProduct(this.props.params.productId)
      
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.params !== this.props.params){
            this.getProduct(nextProps.params.productId)
        }
    }

    setCurrentSize(index) {
        this.setState({currentSize: index})
        window.audioPlayer.pause()
        window.audioPlayer.src = this.state.product.sizes[index].audio
        window.audioPlayer.play()
    }

    getProduct(id){
        fetch(window.apiHost + '/api/products/' + id)
            .then(response => response.json())
            .then(response => this.setState({ product: response }))
            .then(r => {
                if (window.location.href.includes('/product/1')){
                    window.audioPlayer.pause()
                    window.audioPlayer.src = "/audio/styletoberestyled.mp3" 
                    window.audioPlayer.play()
                }
                else {
                    window.audioPlayer.pause()
                    window.audioPlayer.src = this.state.product.sizes[0].audio
                    window.audioPlayer.play()
                }
            })
    }


    // pushId(){
    //     var Id=(this.state.product.id)
    //     browserHistory.push('/product')
    // }

    render() {
   
      const currentSize = this.state.product.sizes[this.state.currentSize]

        return (
            <div>
                <Iam justLogo={true} />
                <div className="previewCard">
                    <div className="columns">
                        <div className="column is-4">
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
                    <div className="column is-1 navColumn">
                    
                        <div className="pageNavOne">
                            {this.props.params.productId < 2 ?
                                <i className="fa fa-forward fa-3x fa-border" aria-hidden="false" onClick={() => browserHistory.push('/product/' + (Number(this.props.params.productId)+ 1))}></i>
                            :
                                <i className="fa fa-forward fa-3x fa-border" aria-hidden="false" onClick={() => browserHistory.push('/products/')}></i>
                            }
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