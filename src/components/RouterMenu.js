import React, { Component } from 'react';
import Menu from './Menu';
import { HashRouter, Switch, Route, Link, Router } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import PageError from '../views/PageError';
import Categories from '../views/Categories';
import Customers from '../views/Customers';
import Employees from '../views/Employees';
import Orders from '../views/Orders';
import Products from '../views/Products';
import Region from '../views/Region';
import Shippers from '../views/Shippers';
import Territories from '../views/Territories';
import Suppliers from '../views/Suppliers';

class RouterMenu extends Component {
  render() {
    return  <HashRouter>
    <div className="font-sans antialiased h-screen w-full">
      <div className="flex w-full h-full">
        <Menu/>
        <div className="flex flex-col pt-10 px-10 lg:px-20 w-full h-screen overflow-y-auto bg-whitegray">
          <Switch>
            <Route exact
              path="/"
              component={Home} />
            <Route exact
              path="/home"
              component={Home} />
            <Route
              exact
              path="/about"
              component={About} />
              <Route
              exact
              path="/categories"
              component={Categories} />
              <Route
              exact
              path="/customers"
              component={Customers} />
              <Route
              exact
              path="/employees"
              component={Employees} />
              <Route
              exact
              path="/orders"
              component={Orders} />
              <Route
              exact
              path="/products"
              component={Products} />
              <Route
              exact
              path="/region"
              component={Region} />
              <Route
              exact
              path="/shippers"
              component={Shippers} />
               <Route
              exact
              path="/suppliers"
              component={Suppliers} />
              <Route
              exact
              path="/territories"
              component={Territories} />
            <Route component={PageError} />
          </Switch>
        </div>

      </div>
    </div>
  </HashRouter>;
  }
}

export default RouterMenu;