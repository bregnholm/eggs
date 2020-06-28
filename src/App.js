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
          <Navbar.Brand href="/eggs">Peters Stuff</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/eggs/">Home</Nav.Link>
                    <Nav.Link href="/eggs/eggs">Eggs</Nav.Link>
                    <Nav.Link href="/eggs/walks">Walks</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Switch>
            <Route path="/eggs/eggs">
                <Eggs />
            </Route>
            <Route path="/eggs/walks">
                <Walks />
            </Route>
            <Route path="/eggs/">
                <Home />
            </Route>
        </Switch>
        <footer></footer>
      </div>
    </Router>
  );
}
