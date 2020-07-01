import React from "react";
import "../index.css";
import { MDBRow, MDBCol, MDBBtn,MDBInput,MDBInputGroup,MDBIcon} from "mdbreact";
class MultiCityFormsPage extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    adults: 1,
    child:0,
    infant:0,
    rows: []
  };
}

handleAddRow = () => {
  this.setState((prevState, props) => {
    const row = { content:"" };
    return { rows: [...prevState.rows, row] };
  });
};

handleRemoveRow = () => {
  this.setState((prevState, props) => {
    return { rows: prevState.rows.slice(1) };
  });
};
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
            <MDBCol className="mb-3 mt-3 ">
            <label className="grey-text float-left">Depart From</label>
            <label className="grey-text ">Going To</label>
            <label className="grey-text float-right"> Depart Date</label>
            <MDBInputGroup inputs={
             <>
            <MDBInput type="text" value="Dubai" required/>
            <MDBInput type="text" value="Paris charles de gaulle" className="text-center" required/>
            <MDBInput type="date" className="text-right" id="noHeight" required/>
            </>
             }  />
            </MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol className="mb-2 mt-2">
            <label className="grey-text float-left">Depart From</label>
            <label className="grey-text ">Going To</label>
            <label className="grey-text float-right"> Depart Date</label>
            <MDBInputGroup inputs={
             <>
            <MDBInput type="text" value="Dubai" required/>
            <MDBInput type="text" value="Paris charles de gaulle" className="text-center" required/>
            <MDBInput type="date" className="text-right" id="noHeight" required/>
            </>
             }  />
            </MDBCol>
            </MDBRow>
            {this.state.rows.map(row => (
            <MDBRow>
            <MDBCol className="mb-2 mt-2">
              <label className="grey-text float-left">Depart From</label>
              <label className="grey-text">Going To</label>
              <label className="grey-text float-right">Depart Date</label>
            <MDBInputGroup inputs={
             <>
            <MDBInput type="text" value="Paris charles de gaulle" required />
            <MDBInput type="text" value="New Delhi" className="text-center" required/>
            <MDBInput type="date" className="text-right" id="noHeight" required/>
            </>
             }  />
            </MDBCol>
            {row.content}
            {Boolean(this.state.rows.length) && (
             <span className="minusBtn">
               <MDBIcon icon="minus" onClick={this.handleRemoveRow} />
               </span>
              )}
          </MDBRow>
            ))}            

          <MDBRow>
            <MDBCol className="mb-3 mt-1">
            <MDBBtn outline color="amber" type="fetch" style={{padding:'4px' ,borderRadius:'10rem'}} onClick={this.handleAddRow}>
            <span style={{padding:'2px'}}>Add City <MDBIcon icon="plus"/></span> 
          </MDBBtn>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol col className="mb-3">
            <label className="grey-text">Adult(13-99YRS)</label>
              <div className="def-number-input number-input">
              <button onClick={this.decrease} className="minus"></button>
              <input className="quantity" name="quantity" value={this.state.adults} onChange={()=> console.log('change')}
              min={0} max={15} type="number"/>
              <button onClick={this.increase} className="plus"></button>
            </div>
            </MDBCol>
            <MDBCol col className="mb-3">
            <label className="grey-text">Child(2-12YRS)</label>
              <div className="def-number-input number-input">
              <button onClick={this.decrease1} className="minus"></button>
              <input className="quantity" name="quantity" value={this.state.child} onChange={()=> console.log('change')}
              min={0} max={15} type="number" />
              <button onClick={this.increase1} className="plus"></button>
            </div>
            </MDBCol>
            <MDBCol col className="mb-3">
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
                id="invalidCheck"
                required
              />
              <label className="custom-control-label" htmlFor="invalidCheck">
                Non Stop Flights
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </MDBCol>
          <MDBCol md="4" className="md-3 mt-3">
          <MDBBtn color="amber" type="submit" style={{btnSearch}}>
            Search Flight <MDBIcon icon="long-arrow-alt-right" />
          </MDBBtn>
          </MDBCol>
          </MDBRow>
        </form>
      </div>
    );
  }
}

export default MultiCityFormsPage;