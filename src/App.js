import React from "react";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Home from "./components/Home";
import Contactus from "./components/Contactus";
import Merchant from "./components/Merchant";
import Pricing from "./components/Pricing";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./img/logo.png";

export default function App() {
  return (
    <Router>
      <div class="pos-f-t">
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-dark p-4">
            <h4 class="text-white">Collapsed content</h4>
            <span class="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="/">
            <img src={logo} />
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
                  HOME
                </Link>
              </li>
              <li className=" nav-item">
                <Link class="nav-link" to="/about">
                  ABOUT US
                </Link>
              </li>
              <li className="active nav-item">
                <Link class="nav-link" to="/pricing">
                  PRICING + SERVICES
                </Link>
              </li>
              <li className="active nav-item">
                <Link class="nav-link" to="/merchant">
                  CREDIT CARD PROCESSING
                </Link>
              </li>
              <li className="active nav-item">
                <Link class="nav-link" to="/testimonial">
                  TESTIMONIAL
                </Link>
              </li>
              <li className="active nav-item">
                <Link class="nav-link" to="/contactus">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </nav>

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
          <Route path="/merchant">
            <Merchant />
          </Route>
          <Route path="/pricing">
            <Pricing />
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
