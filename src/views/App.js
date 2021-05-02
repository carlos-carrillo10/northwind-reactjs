import '../css/App.css';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import PageError from '../views/PageError';

function App() {
//variables
var imageName = require('../assets/img/NorthwindLogo2_1200x1200.png')

//Methods

 
  return (
    <div className="App">
      <HashRouter>
        <div className="font-sans antialiased h-screen w-full">
          <div className="flex w-full h-full">
            {/* <!-- vertical nabvar --> */}
            <div id="verticalNavbar" className="flex bg-primary  w-40 sm:w-56 md:w-72 lg:w-80 xl:w-96 overflow-auto">
              <div className="flex flex-col divide-y divide-white w-full">
                <div className="flex justify-center m-5">
                  {/* <!-- logo --> */}
                  <img src={imageName.default} className="w-25 h-10" />
                </div>
                <div>
                 
                  <div className="tab w-full overflow-hidden">
                      {/* <!-- content --> */}
                      <div className="py-3 md:px-5 flex justify-center lg:justify-start">
                      <Link className="cursor-pointer lg:inline-block lg:align-baseline" to="/home">
                      <div className="flex flex-col gap-2 lg:flex-row lg:gap-5">
                            <div className="w-50 lg:w-5 flex justify-center items-center">
                            <i class="fas fa-home text-white"></i>
                            </div>
                            <div className="text-white text-xs text-center lg:text-base lg:flex lg:items-center">Home</div>
                          </div>
                      </Link>
                      </div>
                  </div>

                   {/* <!-- Accordion --> */}
                  <div className="tab w-full overflow-hidden">
                    <input className="absolute opacity-0 " id="tab-multi-1" type="checkbox" name="tabs" />
                    <label
                      className="block py-3 md:px-5 leading-normal cursor-pointer text-white opacity-50 text-sm uppercase"
                      for="tab-multi-1">Catalog </label>
                    <div className="tab-content overflow-hidden leading-normal">
                      {/* <!-- content --> */}


                      <div className="py-3 md:px-5 flex justify-center lg:justify-start">
                      <Link className="cursor-pointer lg:inline-block lg:align-baseline" to="/home">
                      <div className="flex flex-col gap-2 lg:flex-row lg:gap-5">
                            <div className="w-50 lg:w-5 flex justify-center items-center">
                            <i class="fas fa-th-large text-white"></i>
                            </div>
                            <div className="text-white text-xs text-center lg:text-base lg:flex lg:items-center">Categories</div>
                          </div>
                      </Link>
                      </div>

                      <div className="py-3 md:px-5 flex justify-center lg:justify-start">
                      <Link className="cursor-pointer lg:inline-block lg:align-baseline" to="/home">
                      <div className="flex flex-col gap-2 lg:flex-row lg:gap-5">
                            <div className="w-50 lg:w-5 flex justify-center items-center">
                            <i class="fas fa-user-friends text-white"></i>
                            </div>
                            <div className="text-white text-xs text-center lg:text-base lg:flex lg:items-center">Customers</div>
                          </div>
                      </Link>
                      </div>

                      <div className="py-3 md:px-5 flex justify-center lg:justify-start">
                      <Link className="cursor-pointer lg:inline-block lg:align-baseline" to="/home">
                      <div className="flex flex-col gap-2 lg:flex-row lg:gap-5">
                            <div className="w-50 lg:w-5 flex justify-center items-center">
                            <i class="fas fa-users text-white"></i>
                            </div>
                            <div className="text-white text-xs text-center lg:text-base lg:flex lg:items-center">Employees</div>
                          </div>
                      </Link>
                      </div>

                      <div className="py-3 md:px-5 flex justify-center lg:justify-start">
                      <Link className="cursor-pointer lg:inline-block lg:align-baseline" to="/home">
                      <div className="flex flex-col gap-2 lg:flex-row lg:gap-5">
                            <div className="w-50 lg:w-5 flex justify-center items-center">
                            <i class="fas fa-shopping-cart text-white"></i>
                            </div>
                            <div className="text-white text-xs text-center lg:text-base lg:flex lg:items-center">Orders</div>
                          </div>
                      </Link>
                      </div>


                      <div className="py-3 md:px-5 flex justify-center lg:justify-start">
                      <Link className="cursor-pointer lg:inline-block lg:align-baseline" to="/home">
                      <div className="flex flex-col gap-2 lg:flex-row lg:gap-5">
                            <div className="w-50 lg:w-5 flex justify-center items-center">
                            <i class="fas fa-boxes text-white"></i>
                            </div>
                            <div className="text-white text-xs text-center lg:text-base lg:flex lg:items-center">Products</div>
                          </div>
                      </Link>
                      </div>

                      <div className="py-3 md:px-5 flex justify-center lg:justify-start">
                      <Link className="cursor-pointer lg:inline-block lg:align-baseline" to="/home">
                      <div className="flex flex-col gap-2 lg:flex-row lg:gap-5">
                            <div className="w-50 lg:w-5 flex justify-center items-center">
                            <i class="fas fa-map-pin text-white"></i>                
                            </div>
                            <div className="text-white text-xs text-center lg:text-base lg:flex lg:items-center">Region</div>
                          </div>
                      </Link>
                      </div>
                      <div className="py-3 md:px-5 flex justify-center lg:justify-start">
                      <Link className="cursor-pointer lg:inline-block lg:align-baseline" to="/home">
                      <div className="flex flex-col gap-2 lg:flex-row lg:gap-5">
                            <div className="w-50 lg:w-5 flex justify-center items-center">
                            <i class="fas fa-truck-moving text-white"></i>
                            </div>
                            <div className="text-white text-xs text-center lg:text-base lg:flex lg:items-center">Shippers</div>
                          </div>
                      </Link>
                      </div>
                      <div className="py-3 md:px-5 flex justify-center lg:justify-start">
                      <Link className="cursor-pointer lg:inline-block lg:align-baseline" to="/home">
                      <div className="flex flex-col gap-2 lg:flex-row lg:gap-5">
                            <div className="w-50 lg:w-5 flex justify-center items-center">
                            <i class="fas fa-people-carry text-white"></i>
                            </div>
                            <div className="text-white text-xs text-center lg:text-base lg:flex lg:items-center">Suppliers</div>
                          </div>
                      </Link>
                      </div>
                      <div className="py-3 md:px-5 flex justify-center lg:justify-start">
                      <Link className="cursor-pointer lg:inline-block lg:align-baseline" to="/home">
                      <div className="flex flex-col gap-2 lg:flex-row lg:gap-5">
                            <div className="w-50 lg:w-5 flex justify-center items-center">
                            <i class="fas fa-map-marked-alt text-white"></i>
                            </div>
                            <div className="text-white text-xs text-center lg:text-base lg:flex lg:items-center">Territories</div>
                          </div>
                      </Link>
                      </div>

                    </div>
                  </div>


                </div>
                <div className="mt-auto">
                  <div className="py-3 flex flex-col gap-5">     
                    <a href="https://github.com/crcz10/northwind-reactjs" className="flex gap-3 justify-center items-center text-white">
                    <i className="fab fa-github"></i>
                    <p className="text-sm lg:text-normal">Repository</p>
                    </a> 
                    <label className="text-center text-white text-xs lg:col-span-3">
                      Copyright © 2021, Carlos Carrillo
                            </label>
                  </div>

                </div>
              </div>
            </div>
            <div className="flex flex-col pt-10 px-10 lg:px-20 w-full h-screen overflow-y-auto">
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
                <Route component={PageError} />
              </Switch>
            </div>

          </div>
        </div>
      </HashRouter>

    </div >
  );
}

export default App;
