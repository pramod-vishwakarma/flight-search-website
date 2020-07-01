import React, { Component } from "react";
import "./index.css";
import Home from "./pages/home";
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse,MDBDropdownToggle,MDBDropdownMenu,MDBDropdownItem,
MDBNavItem, MDBNavLink, MDBDropdown} from 'mdbreact';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LoginFormPage from "./pages/login";
class App extends Component {
constructor(props) {
    super(props);
    this.state = {
        collapse: false,
    };
    this.onClick = this.onClick.bind(this);
}

onClick() {
  this.setState({
      collapse: !this.state.collapse,
    });
}

render() {
  const amber = {backgroundColor: '#fbfbfb '}
  // const container = {height: 1300}
  return(
    <div>
      <Router>
        <header>
          <MDBNavbar style={amber} dark expand="md" scrolling fixed="top">
            <MDBNavbarBrand href="/">
            <img src="../../assets/logo.png" width="50px" height="50px"
            className="d-inline-block align-top" alt="logo"/>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={ this.onClick } />
            <MDBCollapse isOpen = { this.state.collapse } navbar>
              <MDBNavbarNav right>
                <MDBNavItem active>
                      <LoginFormPage className="d-none d-md-inline"/>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <div className="d-none d-md-inline">Support</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu right>
                      <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="/offers">Offers</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#">MileHigh for business</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </header>
        <Route path="/" component={Home}>
        </Route>
      </Router>
    </div>
  );
}
}
export default App;
