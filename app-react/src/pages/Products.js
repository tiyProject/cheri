// import React, { Component } from 'react';
// import { browserHistory } from 'react-router';
// import Iam from '../components/Iam';

// class Categories extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             collections: []
//         }
//     }

//     componentWillMount() {
//         fetch(window.apiHost + '/api/collections')
//         .then(response => response.json())
//         .then(response => this.setState({collections: response}))
//         .then(blah => console.log(this.state.collections))
//     }

//     render() {
//         const collections = this.state.collections.map((collection, index) => <Category key={index} className={"collection" + index} {...collection} />)

//         return <div>
//             <Iam />
//             <div className="columns">
//                 {collections}
//             </div>
//         </div>
//     }
// }



// export default Products;

// div class="columns is-multiline is-mobile">
//   <div class="column is-one-quarter">
//     <div class=frameRed>
//     <div class="thumbNail">
//      </div>    
//     </div>
//   </div>