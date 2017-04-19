import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Layout2 from '../components/Layout2';
import Product from '../components/Product';
import Category from '../components/Category';

class Products extends Component {
  constructor(props) {
        super(props)
        this.state = {
            products : []
        }
    }

    componentWillMount() {
        fetch(window.apiHost + '/api/collections/' + this.props.params.collectionId + '/products')
        .then(response => response.json())
        .then(response => this.setState({products: response}))
        .then(blah => console.log(this.state.products))
    }

    render() {
        const products = this.state.products.map((product, index) => <Product key={index}  {...product} />)

        return <div className="columns is-multiline">
              {products}
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