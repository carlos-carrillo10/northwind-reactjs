import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//variables
var imageName = require('../assets/img/map.png')

class PageError extends Component {
  render() {
    return <div className="w-full h-full flex flex-col justify-center items-center gap-3">
      <img src={imageName.default} />
      <p className="font-semibold text-4xl text-center">Page not found</p>
      <p className="text-center text-2xl">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
      <Link className="cursor-pointer lg:inline-block lg:align-baseline" to="/home">
          Go to Home
      </Link>
    </div>;
  }
}

export default PageError;