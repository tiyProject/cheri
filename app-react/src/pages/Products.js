import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Iam from '../components/Iam';
import Product from '../components/Product';

window.audioPlayer = document.querySelector('#audioPlayer')

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collections: []
        }
    }

    componentWillMount() {
        fetch(window.apiHost + '/api/collections')
        .then(response => response.json())
        .then(response => this.setState({collections: response}))
        .then(r => {
                if (window.location.href.includes('/products/')){
                    window.audioPlayer.pause()
                    window.audioPlayer.src = "/audio/Samba.mp3" 
                    window.audioPlayer.play()
                }    
    }
        )
    }




    render() {
        // const collections = this.state.collections.map((collection, index) => <Product key={index} className={"collection" + index} {...collection} />)

        return <div>
            <Iam justLogo={true} />
            <div className="columns">
                <Product className={"collection0"} {...this.state.collections[1]} index={1} />
                <Product className={"collection1"} {...this.state.collections[2]} index={2} />
                <Product className={"collection2"} {...this.state.collections[3]} index={3} />
                <Product className={"collection3"} {...this.state.collections[4]} index={4} />
            </div>
            </div>
        
       
    
}
}


export default Products;

// div class="columns is-multiline is-mobile">
//   <div class="column is-one-quarter">
//     <div class=frameRed>
//     <div class="thumbNail">
//      </div>    
//     </div>
//   </div>