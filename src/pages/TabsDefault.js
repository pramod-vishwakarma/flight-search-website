import React from "react";
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink,MDBIcon } from "mdbreact";
import CollapsePage from "./flights";
import HotelsFormsPage from "./hotels";
import HolidayFormsPage from "./holiday";
const btnRound = {marginBottom:'.5rem',marginLeft:'20px', padding:"4px",
      borderRadius:'50%',height:'50px',width:'50px',borderColor:'#ffa100'};

export default () => (
  <BrowserRouter>
    <h6>Book Flights, Hotels and Holiday Packages</h6>
    <MDBNav className="nav-tabs nav-fill justify-content-center mt-3">
      <MDBNavItem>
        <MDBNavLink to="/flight" style={btnRound}>
        <MDBIcon icon="plane fa-lg" style={{margin: '12px auto',transform: 'rotate(-30deg)'}}/> 
        </MDBNavLink>
        <span>Flights</span>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="/hotel" style={btnRound}>
        <MDBIcon icon="bed fa-lg" style={{margin: '12px auto'}}/> 
        </MDBNavLink>
        <span>Hotels</span>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="/tour" style={btnRound}>
        <MDBIcon icon="hiking fa-lg" style={{margin: '12px auto'}}/>
        </MDBNavLink>
        <span>Tour</span>
      </MDBNavItem>
      <MDBNavItem>
      <MDBNavLink  disabled to="#!" style={btnRound}>
      <MDBIcon icon="car fa-lg" style={{margin: '12px auto'}}/>
      </MDBNavLink>
      <span>Car</span>
      </MDBNavItem>
      <MDBNavItem>
      <MDBNavLink  disabled to="#!" style={btnRound}>
      <MDBIcon icon="user-shield" style={{margin: '12px auto'}}/>
      </MDBNavLink>
      <span>Insurance</span>
      </MDBNavItem>
    </MDBNav>
    <hr/>
    <Switch>``
      <Route path="/flight" component={CollapsePage}></Route>
      <Route path="/hotel" component={HotelsFormsPage}></Route>
      <Route path="/tour" component={HolidayFormsPage}></Route>
    </Switch>  
  </BrowserRouter>
);