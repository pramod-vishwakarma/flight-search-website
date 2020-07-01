import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import FormPage from "./form";
import OneWayFromsPage from "./oneway";
import MultiCityFormsPage from "./multicity";
const btnRound1 = {
  marginBottom: "1rem",
  marginRight: "7px",
  width: "6.8rem",
  padding: "4px",
  borderRadius: "10rem",
  borderColor: "#ffa100"
};
export default () => (
  <BrowserRouter>
    <MDBNav className="nav-tabs  justify-content-center mt-1">
      <MDBNavItem>
        <MDBNavLink to="/flight" style={btnRound1}>
          Round Trip
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="/one-way" style={btnRound1}>
          One Way
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="/multi-city" style={btnRound1}>
          Multi City
        </MDBNavLink>
      </MDBNavItem>
    </MDBNav>
    <Switch>
      <Route path="/flight" component={FormPage}></Route>
      <Route path="/one-way" component={OneWayFromsPage}></Route>
      <Route path="/multi-city" component={MultiCityFormsPage}></Route>
    </Switch>
    
  </BrowserRouter>
);
