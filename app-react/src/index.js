import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Store from './components/Store';
import Products from './pages/Products';
import Product from './pages/Product';
import Categories from './pages/Categories';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';

window.apiHost = 'http://ngrok.io';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Store}>
      <IndexRoute component={Categories} />
      <Route path="products/:categoryId" component={Products} />
      <Route path="product/:productId" component={Product} />
      <Route path="checkout" component={Checkout} />
      <Route path="thankyou" component={ThankYou} />
    </Route>
  </Router>,
  document.getElementById('root')
);
