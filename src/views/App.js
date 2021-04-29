import '../css/App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import PageError from '../views/PageError';

function App() {

  var imageName = require('../assets/img/NorthwindLogo2_1200x1200.png')

  return (
    <div className="App">
      <div className="flex w-full h-full bg-primary py-2">
        <div className="w-1/6">
          <div className="flex justify-center items-center">
            <img src={imageName.default} className="w-25 h-10" />
          </div>
        </div>
        <div className="flex justify-start w-5/6 gap-5">
          <div className="flex justify-center items-center">
          <a className="text-white font-semibold m-2" href="/Home">Home</a>
          </div>
          <div className="flex justify-center items-center">
          <a className="text-white font-semibold m-2" href="/About">About</a>
          </div>
        </div>
      </div>
      <Router>
        <Switch>
          <Route exact
            path="/"
            component={Home} />
          <Route exact
            path="/Home"
            component={Home} />
          <Route
            exact
            path="/About"
            component={About} />
          <Route component={PageError} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
