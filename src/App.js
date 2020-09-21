import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import './App.css'; 
import Home from "./Home";
import Login from "./Login";

function App() {
  return ( 
    <Router>
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/Shopping">
          <h1>Shopping</h1>
        </Route>

        <Route path="/">
          <Header />
          <Home /> 
        </Route>
      </Switch>
    </div>
   </Router>
  );
}

export default App;
