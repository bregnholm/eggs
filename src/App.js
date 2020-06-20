import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Eggs from "./Eggs";
import Walks from "./Walks";
import './App.css';
import Home from "./Home";


export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar expand="lg" variant="dark">
          <Navbar.Brand href="/">Peters Stuff</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/eggs">Eggs</Nav.Link>
                    <Nav.Link href="/walks">Walks</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Switch>
            <Route path="/eggs">
                <Eggs />
            </Route>
            <Route path="/walks">
                <Walks />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
        <footer></footer>
      </div>
    </Router>
  );
}
