import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Store from './components/Store';
import Products from './pages/Products';
import ProductView from './pages/ProductView';
import Categories from './pages/Categories';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';


window.apiHost = 'http://localhost:3000/';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Store}>
      <IndexRoute component={Categories} />
      <Route path="products/:collectionId" component={Products} />
      <Route path="product/:productId" component={ProductView} />
      <Route path="checkout" component={Checkout} />
      <Route path="thankyou" component={ThankYou} />
    </Route>
  </Router>,
  document.getElementById('root')
);
