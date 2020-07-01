import React from "react";
import { MDBRow, MDBCol, MDBBtn,MDBInput,MDBInputGroup,MDBIcon} from "mdbreact";
class HolidayFormsPage extends React.Component {
  state = {
    value: 0
  }

  decrease = () => {
    this.setState({ value: this.state.value - 1 });
  }

  increase = () => {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    const btnSearch = {width:'10rem',padding:'10px'}
    return (
      <div>
        <form>
          <MDBRow>
            <MDBCol className="mb-3 mt-3">
            <label className="grey-text float-left">Depart From</label>
              <label className="grey-text float-right">Going To</label>
            <MDBInputGroup inputs={
             <>
            <MDBInput type="text" value="Delhi" required/>
            <MDBInput type="text" value="Paris, Charles de gaulle" className="text-right ml-4" required />
            </>
             } />
            </MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol  className="mb-4 mt-3">
            <div>
              <select className="browser-default custom-select">
                <option>Month of Travel (Optional)</option>
                <option value="1">December 2019</option>
                <option value="2">January 2020</option>
                <option value="3">February 2020</option>
                <option value="4">March 2020</option>
                <option value="5">April 2020</option>
                <option value="6">May 2020</option>
                <option value="7">June 2020</option>
              </select>
            </div>
          </MDBCol>
          </MDBRow>
          <MDBRow>
          <MDBCol md="6" className="mb-3 mt-4">
            <div className="custom-control custom-checkbox pl-3">
              <input
                className="custom-control-input"
                type="checkbox"
                value=""
                id="invalidCheck"/>
              <label className="custom-control-label" htmlFor="invalidCheck">
                Non Stop Flights
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </MDBCol>
          <MDBCol md="4" className="md-3 mt-3">
          <MDBBtn color="amber" type="submit" style={btnSearch}>
            Search Flight <MDBIcon icon="long-arrow-alt-right" />
          </MDBBtn>
          </MDBCol>
          </MDBRow>
        </form>
      </div>
    );
  }
}

export default HolidayFormsPage;