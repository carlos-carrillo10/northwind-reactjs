import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  render() {
    return <div className="flex flex-col gap-5">
      <div className="white-card flex-col justify-center items-center md:justify-between md:flex-row">
        <div className="flex flex-col">
          a
          </div>
        <div className="flex flex-col">
          b
          </div>
        <div className="flex flex-col">
          c
          </div>

      </div>
      <div className="flex flex-row justify-center md:justify-between flex-wrap gap-5">
        <Link to="/categories" className="white-card flex-col w-full md:w-1/4">
          <div className="flex gap-5 items-center">
            <i class="fas fa-th-large text-black"></i>
            <div className="text-black text-center md:text-base lg:flex md:items-center">Categories</div>
          </div>
        </Link>
        <Link to="/customers" className="white-card flex-col w-full md:w-1/4">
          <div className="flex gap-5 items-center">
            <i class="fas fa-user-friends text-black"></i>
            <div className="text-black text-center lg:text-base lg:flex lg:items-center">Customers</div>
          </div>
        </Link>
        <Link to="/employees" className="white-card flex-col w-full md:w-1/4">
          <div className="flex gap-5 items-center">
            <i class="fas fa-users text-black"></i>
            <div className="text-black text-center lg:text-base lg:flex lg:items-center">Employees</div>
          </div>
        </Link>
        <Link to="/orders" className="white-card flex-col w-full md:w-1/4">
          <div className="flex gap-5 items-center">
            <i class="fas fa-shopping-cart text-black"></i>
            <div className="text-black text-center lg:text-base lg:flex lg:items-center">Orders</div>
          </div>
        </Link>
        <Link to="/products" className="white-card flex-col w-full md:w-1/4">
          <div className="flex gap-5 items-center">
            <i class="fas fa-boxes text-black"></i>
            <div className="text-black text-center lg:text-base lg:flex lg:items-center">Products</div>
          </div>
        </Link>
        <Link to="/region" className="white-card flex-col w-full md:w-1/4">
          <div className="flex gap-5 items-center">
            <i class="fas fa-map-pin text-black"></i>
            <div className="text-black text-center lg:text-base lg:flex lg:items-center">Region</div>
          </div>
        </Link>
        <Link to="/shippers" className="white-card flex-col w-full md:w-1/4">
          <div className="flex gap-5 items-center">
            <i class="fas fa-truck-moving text-black"></i>
            <div className="text-black text-center lg:text-base lg:flex lg:items-center">Shippers</div>
          </div>
        </Link>
        <Link to="/suppliers" className="white-card flex-col w-full md:w-1/4">
          <div className="flex gap-5 items-center">
            <i class="fas fa-people-carry text-black"></i>
            <div className="text-black text-center lg:text-base lg:flex lg:items-center">Suppliers</div>
          </div>
        </Link>
        <Link to="/territories" className="white-card flex-col w-full md:w-1/4">
          <div className="flex gap-5 items-center">
            <i class="fas fa-map-marked-alt text-black"></i>
            <div className="text-black text-center lg:text-base lg:flex lg:items-center">Territories</div>
          </div>
        </Link>

      </div>
    </div>;
  }
}

export default Home;