import React from "react";
import { MDBRow, MDBCol, MDBBtn,MDBInput,MDBInputGroup,MDBIcon} from "mdbreact";
class OneWayFormsPage extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    adults: 1,
    child:0,
    infant:0,
  }
}
  decrease = () => {
    this.setState({ adults: this.state.adults - 1 });
  }

  increase = () => {
    this.setState({ adults: this.state.adults + 1 });
  }
  decrease1 = () => {
    this.setState({ child: this.state.child - 1 });
  }

  increase1 = () => {
    this.setState({ child: this.state.child + 1 });
  }
  decrease2 = () => {
    this.setState({ infant: this.state.infant - 1 });
  }

  increase2 = () => {
    this.setState({ infant: this.state.infant + 1 });
  }

  render() {
    const btnSearch = {width:'10rem',padding:'10px'}
    return (
      <div>
        <form>
          <MDBRow>
            <MDBCol md="12" className="mb-3 mt-3">
            <label className="grey-text float-left">Depart From</label>
              <label className="grey-text float-right">Going To</label>
            <MDBInputGroup inputs={
             <>
            <MDBInput type="text" value="DELHI"/>
            <span className="swipCircle">
            <MDBIcon icon="exchange-alt" />
            </span>
            <MDBInput type="text" value="DUBAI" id="textLeft"/>
            </>
             } />
            </MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol className="mb-3 mt-3">
            <label className="grey-text float-left">Departure Date</label>
            <label className="grey-text float-right">Return Date</label>
            <MDBInputGroup inputs={
             <>
            <MDBInput type="date" />
            <MDBInput type="date" id="textLeft" className="ml-5" disabled/>
            </>
             } />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol col className="mb-4 mt-3 ">
            <label className="grey-text"> Adult(13-99YRS)</label>
              <div className="def-number-input number-input">
              <button onClick={this.decrease} className="minus"></button>
              <input className="quantity" name="quantity" value={this.state.adults} onChange={()=> console.log('change')}
              min={0} max={15} type="number" />
              <button onClick={this.increase} className="plus"></button>
            </div>
            </MDBCol>
            <MDBCol col className="mb-4 mt-3">
            <label className="grey-text">Child(2-12YRS)</label>
              <div className="def-number-input number-input">
              <button onClick={this.decrease1} className="minus"></button>
              <input className="quantity" name="quantity" value={this.state.child} onChange={()=> console.log('change')}
              min={0} max={15} type="number" />
              <button onClick={this.increase1} className="plus"></button>
            </div>
            </MDBCol>
            <MDBCol col className="mb-4 mt-3">
            <label className="grey-text">Infant(-2YRS)</label>
              <div className="def-number-input number-input">
              <button onClick={this.decrease2} className="minus"></button>
              <input className="quantity" name="quantity" value={this.state.infant} onChange={()=> console.log('change')}
              min={0} max={15} type="number" />
              <button onClick={this.increase2} className="plus"></button>
            </div>
            </MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol md="7" className="mb-4 mt-3">
            <div>
              <select className="browser-default custom-select">
                <option>Choose your option</option>
                <option value="1">Economy</option>
                <option value="2">Premium Economy</option>
                <option value="3">Business Class</option>
                <option value="4">First Class</option>
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
                id="invalidCheck" required/>
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

export default OneWayFormsPage;