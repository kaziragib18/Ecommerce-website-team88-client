import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Login/Login';
import Explore from './Pages/Home/Explore/Explore';
import ProductDetails from './Pages/Home/Explore/ProductDetails/ProductDetails';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        
          <Route  path="/explore">
            <Explore/>
          </Route>
         
          <Route  path="/productdetails/:productid">
            <ProductDetails/>
          </Route>
         

          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
