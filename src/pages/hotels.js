import React from "react";
import { MDBRow, MDBCol, MDBBtn,MDBInput,MDBIcon} from "mdbreact";
class HotelsFormsPage extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    room: 1,
    adult:0,
    child:0,
  }
}

  decrease = () => {
    this.setState({ room: this.state.room - 1 });
  }

  increase = () => {
    this.setState({ room: this.state.room + 1 });
  }
  decrease1 = () => {
    this.setState({ adult: this.state.adult - 1 });
  }

  increase1 = () => {
    this.setState({ adult: this.state.adult + 1 });
  }
  decrease2 = () => {
    this.setState({ child: this.state.child - 1 });
  }

  increase2 = () => {
    this.setState({ child: this.state.child + 1 });
  }

  render() {
    const btnSearch = {width:'10rem',padding:'10px'}
    return (
      <div>
        <form>
          <MDBRow>
            <MDBCol md="12">
            <MDBInput label="Select City, Location or Hotel Name (Worldwide)" value="Goa, Goa, India"/>
            </MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol md="6" className="mb-0">
            <MDBInput label="Check-in" type="date" required/>
            </MDBCol>
            <MDBCol md="6" className="mb-0">
            <MDBInput label="Check-out" type="date" required />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol col className="mb-3">
            <label className="grey-text">Rooms</label>
             <div className="def-number-input number-input">
              <button onClick={this.decrease} className="minus"></button>
              <input className="quantity" name="quantity" value={this.state.room} onChange={()=> console.log('change')}
              type="number" min={1} max={15} />
              <button onClick={this.increase} className="plus"></button>
            </div>
            </MDBCol>
            <MDBCol col className="mb-3">
            <label className="grey-text">Adults</label>
                <div className="def-number-input number-input">
              <button onClick={this.decrease1} className="minus"></button>
              <input className="quantity" name="quantity" value={this.state.adult} onChange={()=> console.log('change')}
              type="number" min={1} max={15} />
              <button onClick={this.increase1} className="plus"></button>
            </div>
            </MDBCol>
            <MDBCol col className="mb-3">
            <label className="grey-text">Child</label>
              <div className="def-number-input number-input">
              <button onClick={this.decrease2} className="minus"></button>
              <input className="quantity" name="quantity" value={this.state.child} onChange={()=> console.log('change')}
              type="number" min={0} max={15} />
              <button onClick={this.increase2} className="plus"></button>
            </div>
            </MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol md="7" className="mb-4 mt-3">
            <div>
              <select className="browser-default custom-select" required>
                <option>Choose your option</option>
                <option value="1">Single Room</option>
                <option value="2">Double Room</option>
                <option value="3">Triple Room</option>
                <option value="4">Quad Room</option>
              </select>
            </div>
          </MDBCol>
          </MDBRow>
          <MDBBtn color="amber float-right" type="submit" style={btnSearch}>
            Search Hotels <MDBIcon icon="long-arrow-alt-right" />
          </MDBBtn>
        </form>
      </div>
    );
  }
}

export default HotelsFormsPage;