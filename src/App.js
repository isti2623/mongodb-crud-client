import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AddProduct from './components/AddProduct/AddProduct';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/addproduct'>
            <AddProduct></AddProduct>
          </Route>
          <Route path='/updateproduct'>
            <UpdateProduct></UpdateProduct>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
