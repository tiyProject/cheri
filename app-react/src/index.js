import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Store from './components/Store';
import Products from './pages/Products';
import ProductView from './pages/ProductView';
import Categories from './pages/Categories';
import Checkout from './pages/Checkout';
import Sizes from './components/Sizes';


window.apiHost = 'https://agile-lowlands-46592.herokuapp.com/';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Store}>
      <IndexRoute component={Categories} />
      <Route path="products/" component={Products} />
       <Route path="product/checkout/:collectionId" component={Checkout} />
      <Route path="product/:productId" component={ProductView} />
    </Route>
  </Router>,
  document.getElementById('root')
);
