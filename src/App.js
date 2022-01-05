import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Explore from './Pages/Home/Explore/Explore';
import ProductDetails from './Pages/Home/Explore/ProductDetails/ProductDetails';
import Login from './Pages/Home/Login/Login/Login';
import Register from './Pages/Home/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Home/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/register">
              <Register />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <PrivateRoute path="/productdetails/:productid">
              <ProductDetails />
            </PrivateRoute>


          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
