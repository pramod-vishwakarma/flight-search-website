import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader,MDBRow,MDBCol,MDBInput,MDBIcon,MDBCardBody} from 'mdbreact';
class loginFormPage extends Component {
state = {
  modal8: false,
  modal9:false
}

// toggle = () => {
//   this.setState({
//     modal: !this.state.modal
//   });
// }
toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
    <MDBContainer style={{padding:'8px',display: 'block',fontWeight:'400',color:'333'}}>
      <a href="#!" onClick={this.toggle(8)}>My Account</a>
      <MDBModal isOpen={this.state.modal8} toggle={this.toggle } centered>
        <MDBModalHeader toggle={this.toggle(8)}></MDBModalHeader>
        <MDBModalBody>
        <MDBContainer>
      <MDBRow>
        <MDBCol>
          <div>
          <MDBRow className="d-flex justify-content-center">
          <h3 className="mb-3 pt-3 font-weight-bold">
          Log in
          </h3>
          </MDBRow>
          </div>
          <MDBCardBody className="mx-4">
          <MDBInput label="Your email" group type="text" validate />
          <MDBInput label="Your password" group type="password" validate/>
          <div>
          <MDBCol className="d-flex align-items-start">
          <div className="text-center d-flex justify-content-center">
          <MDBBtn color="grey" className="z-depth-1a" style={{width:'300px',padding:'10px'}} type="submit">
          Log in
          </MDBBtn>
          </div>
          </MDBCol>
          </div>
          <p className="font-small grey-text d-flex justify-content-end">Forgot
          <a href="#!" className="dark-grey-text ml-1 font-weight-bold">Password?</a>
          </p>
          <div className="justify-text-center">
          <p className="font-small grey-text mt-3 text-center">Or Login With</p>
          <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
          <a href="#!" className="fa-lg p-2 m-2 fb-ic">
          <MDBIcon fab icon="facebook-f" size="lg" className="orange-text" />
          </a>
          <a href="#!" className="fa-lg p-2 m-2 tw-ic">
          <MDBIcon fab className="fa-twitter orange-text fa-lg" />
          </a>
          <a href="#!" className="fa-lg p-2 m-2 gplus-ic">
          <MDBIcon fab className="fa-google-plus-g orange-text fa-lg" />
          </a>
          </MDBRow>
          </div>
          <hr/>
          <p className="font-small grey-text mt-3 text-center">
          Don't have an account?</p>
          <MDBRow className="d-flex align-items-center mb-4 mt-1">
          <MDBCol className="d-flex justify-content-center">
          <MDBBtn color="amber" onClick={this.toggle(9)} style={{width:'300px',padding:'10px'}} type="submit">Sign up</MDBBtn>
          <MDBModal isOpen={this.state.modal9} toggle={this.toggle(9)} centered>
          <MDBModalHeader toggle={this.toggle(9)}></MDBModalHeader>
          <MDBModalBody>
          <MDBContainer>
          <MDBRow>
          <MDBCol>
            <div>
            <MDBRow className="d-flex justify-content-center">
            <h3 className="mb-3 pt-3 font-weight-bold">Sign Up</h3>
            </MDBRow>
            </div>
            <MDBCardBody className="mx-4">
            <MDBInput label="First Name" group type="text" required/>
            <MDBInput label="Last Name" group type="text" required/>
            <MDBInput label="Email" group type="email" required/>
            <MDBInput label="Mobile Number" group type="tel" required/>
            <MDBInput label="Your Password" group type="password" required/>
            <MDBInput label="Confirm Password" group type="password" required/>
            <div>
            <MDBCol className="d-flex align-items-start">
            <div className="text-center d-flex justify-content-center">
            <MDBBtn color="amber" type="submit" style={{width:'300px',padding:'10px'}}>Sign Up</MDBBtn>
            </div>
            </MDBCol>
            </div>
            <div className="justify-text-center">
            <p className="font-small grey-text mt-3 text-center mt-3">Or Sign Up With</p>
            <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
            <a href="#!" className="fa-lg p-2 m-2 fb-ic">
            <MDBIcon fab icon="facebook-f" size="lg" className="orange-text" />
            </a>
            <a href="#!" className="fa-lg p-2 m-2 tw-ic">
            <MDBIcon fab className="fa-twitter orange-text fa-lg" />
            </a>
            <a href="#!" className="fa-lg p-2 m-2 gplus-ic">
            <MDBIcon fab className="fa-google-plus-g orange-text fa-lg" />
            </a>
            </MDBRow>
            </div>
            <hr/>
            <p className="font-small grey-text mt-3 text-center">
            Already a member?</p>
            <MDBRow className="d-flex align-items-center mb-4 mt-1">
            <MDBCol className="d-flex justify-content-center">
            <MDBBtn color="grey"  onClick={this.toggle(9)} type="submit" className="z-depth-1a" style={{width:'300px',padding:'10px'}}> Log in</MDBBtn>       
            </MDBCol>
            </MDBRow>
            </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </MDBModalBody>
      </MDBModal>
      </MDBCol>
      </MDBRow>
      </MDBCardBody>
      </MDBCol>
      </MDBRow>
    </MDBContainer>
    </MDBModalBody>
    </MDBModal>
    </MDBContainer>
    );
  }
}

export default loginFormPage;