import './App.css';
import React, { Component } from 'react';
import { Switch ,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/Navbar';
import ProductList from './components/ProductList';
import Detail from './components/Detail';
import Cart from './components/Cart';
import Default from './components/Default';


export class App extends Component {
  render() {
    return (  
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route path='/detail' component={Detail} />
          <Route path='/cart' component={Cart} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

