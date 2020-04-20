import React from "react";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Home from "./components/Home";
import Contactus from "./components/Contactus";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li className="active nav-item">
              <Link class="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className=" nav-item">
              <Link class="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="active nav-item">
              <Link class="nav-link" to="/testimonial">
                Testimonial
              </Link>
            </li>
            <li className="active nav-item">
              <Link class="nav-link" to="/contactus">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/testimonial">
            <Testimonial />
          </Route>
          <Route path="/contactus">
            <Contactus />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Users() {
  return <h2>Users</h2>;
}
