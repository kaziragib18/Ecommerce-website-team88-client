import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Login/Login';
import NavBar from './Pages/Home/Shared/NavBar/NavBar';
import MakeAdmin from './Pages/Dashboard/Dashboard/MakeAdmin';
import MyOrders from './Pages/Dashboard/Dashboard/MyOrders';
import ManageOrder from './Pages/Dashboard/Dashboard/ManageOrder';
import ManageProduct from './Pages/Dashboard/Dashboard/ManageProduct';
import AddItem from './Pages/Dashboard/Dashboard/AddItem';



function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/addItem">
            <AddItem/>
          </Route>
          <Route path="/manage_order">
          <ManageOrder/>
          </Route>
          <Route path="/manage_product">
           <ManageProduct/>
          </Route>
          <Route path="/myorders">
            <MyOrders/>
          </Route>
          <Route path="/makeadmin">
            <MakeAdmin/>
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
