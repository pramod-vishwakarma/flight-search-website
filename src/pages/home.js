import React, { Component } from "react";
import "../index.css";
import TabsDefault from "./TabsDefault";
import { MDBContainer,MDBCard,MDBCardBody,MDBRow,MDBCol,MDBInputGroup,MDBBtn,MDBCardTitle,MDBCardText} from 'mdbreact';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ListPanelPage from "./listgroup";


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
      
class Home extends Component {
    render() {
        const cardStyle={marginLeft:'10px',marginRight:'10px',width:'160px'};
      return (
        <MDBContainer  className="text-center mt-5 pt-5 ">
        <MDBRow>
        <MDBCol md="8" className="px-2 mb-r" id="details">
        <div> {/* domestic flight searches */}
        <h6 style={{textAlign:'left'}}>Popular domestic Flight Routes</h6>
        <Carousel responsive={responsive}>
         <div md="2"  className="mt-2">
         <div className="card" style={cardStyle}>
          <div className="card-body">
           <div className="origin_destination">
           <div className="elip">Delhi</div>
            <div className="time">Sun, 26 Jan</div>
            <div className="elip">Dubai</div></div>
            <div className="price_go dest mt-4">
            <p className="low_price">
              <span>Starting From</span>
              <span className="rs"> Rs.
						  	7,917</span>  
							 </p></div>
          </div>
          </div>
          </div>
          <div md="2"  className="mt-2">
         <div className="card" style={cardStyle}>
          <div className="card-body">
         <div className="origin_destination">
           <div className="elip">Delhi</div> 
           <div className="time">Sun, 26 Jan</div> 
           <div className="elip">Dubai</div>
           </div>
           <div className="price_go dest mt-4">
            <p className="low_price">
              <span>Starting From</span>
              <span className="rs"> Rs. 
						  	7,917</span>
							 </p></div>
          </div>
          </div>
          </div>
          <div md="2"  className="mt-2">
         <div className="card" style={cardStyle}>
          <div className="card-body">
         <div className="origin_destination">
           <div className="elip">Delhi</div> 
           <div className="time">Sun, 26 Jan</div> 
           <div className="elip">Dubai</div>
           </div>
           <div className="price_go dest mt-4">
            <p className="low_price">
              <span>Starting From</span>
              <span className="rs"> Rs. 
						  	7,917 </span>
							 </p></div>
          </div>
          </div>
          </div>
          <div md="2"  className="mt-2">
         <div className="card" style={cardStyle}>
          <div className="card-body">
         <div className="origin_destination">
           <div className="elip">Delhi</div>
           <div className="time">Sun, 26 Jan</div>
           <div className="elip">Dubai</div>
           </div>
           <div className="price_go dest mt-4">
            <p className="low_price">
              <span>Starting From</span>
              <span className="rs"> Rs. 
						  	7,917 </span>
							 </p></div>
          </div>
          </div>
          </div>
          <div md="2"  className="mt-2">
         <div className="card" style={cardStyle}>
          <div className="card-body">
         <div className="origin_destination ">
           <div className="elip">Delhi</div>
           <div className="time">Sun, 26 Jan</div>
           <div className="elip">Dubai</div>
           </div>
           <div className="price_go dest mt-4">
            <p className="low_price">
              <span>Starting From</span>
              <span className="rs"> Rs. 
						  	7,917 </span>
							 </p></div>
          </div>
          </div>
          </div>
          <div md="2"  className="mt-2">
         <div className="card" style={cardStyle}>
          <div className="card-body">
         <div className="origin_destination">
           <div className="elip">Delhi</div>
           <div className="time">Sun, 26 Jan</div>
           <div className="elip">Dubai</div>
           </div>
           <div className="price_go dest mt-4">
            <p className="low_price">
              <span>Starting From</span>
              <span className="rs"> Rs. 
						  	7,917 </span>
							 </p></div>
          </div>
          </div>
          </div>
      </Carousel>
      </div>  {/* end domestic flight searches */}
      <div className="mt-5"> {/* International flight searches */}
      <h6 style={{textAlign:'left'}}>Popular International Flight Routes</h6>
        <Carousel responsive={responsive}>
         <div md="2"  className="mt-2">
         <div className="card" style={cardStyle}>
          <div className="card-body">
           <div className="origin_destination">
           <div className="elip">Delhi</div>
            <div className="time">Sun, 26 Jan</div>
            <div className="elip">Dubai</div></div>
            <div className="price_go dest mt-4">
            <p className="low_price">
              <span>Starting From</span>
              <span className="rs"> Rs.
						  	7,917</span>  
							 </p></div>
          </div>
          </div>
          </div>
          <div md="2"  className="mt-2">
         <div className="card" style={cardStyle}>
          <div className="card-body">
         <div className="origin_destination">
           <div className="elip">Delhi</div> 
           <div className="time">Sun, 26 Jan</div> 
           <div className="elip">Dubai</div>
           </div>
           <div className="price_go dest mt-4">
            <p className="low_price">
              <span>Starting From</span>
              <span className="rs"> Rs. 
						  	7,917</span>
							 </p></div>
          </div>
          </div>
          </div>
          <div md="2"  className="mt-2">
         <div className="card" style={cardStyle}>
          <div className="card-body">
         <div className="origin_destination">
           <div className="elip">Delhi</div> 
           <div className="time">Sun, 26 Jan</div> 
           <div className="elip">Dubai</div>
           </div>
           <div className="price_go dest mt-4">
            <p className="low_price">
              <span>Starting From</span>
              <span className="rs"> Rs. 
						  	7,917 </span>
							 </p></div>
          </div>
          </div>
          </div>
          <div md="2"  className="mt-2">
         <div className="card" style={cardStyle}>
          <div className="card-body">
         <div className="origin_destination">
           <div className="elip">Delhi</div>
           <div className="time">Sun, 26 Jan</div>
           <div className="elip">Dubai</div>
           </div>
           <div className="price_go dest mt-4">
            <p className="low_price">
              <span>Starting From</span>
              <span className="rs"> Rs. 
						  	7,917 </span>
							 </p></div>
          </div>
          </div>
          </div>
          <div md="2"  className="mt-2">
         <div className="card" style={cardStyle}>
          <div className="card-body">
         <div className="origin_destination ">
           <div className="elip">Delhi</div>
           <div className="time">Sun, 26 Jan</div>
           <div className="elip">Dubai</div>
           </div>
           <div className="price_go dest mt-4">
            <p className="low_price">
              <span>Starting From</span>
              <span className="rs"> Rs. 
						  	7,917 </span>
							 </p></div>
          </div>
          </div>
          </div>
          <div md="2"  className="mt-2">
         <div className="card" style={cardStyle}>
          <div className="card-body">
         <div className="origin_destination">
           <div className="elip">Delhi</div>
           <div className="time">Sun, 26 Jan</div>
           <div className="elip">Dubai</div>
           </div>
           <div className="price_go dest mt-4">
            <p className="low_price">
              <span>Starting From</span>
              <span className="rs"> Rs. 
						  	7,917 </span>
							 </p></div>
          </div>
          </div>
          </div>
      </Carousel>
      </div> {/* end international flight searches */}
      {/* list item start */}
      <MDBContainer>
      <MDBRow>
      <MDBCol>
      <div className="mt-5">
        <h6 style={{textAlign:'left'}}>Top International Holiday Destinations</h6>
      <ListPanelPage/>
      </div>
       </MDBCol>
       <MDBCol>
      <div className="mt-5">
        <h6 style={{textAlign:'left'}}>Top International Holiday Destinations</h6>
      <ListPanelPage/>
      </div>
       </MDBCol>
       </MDBRow>
       </MDBContainer>
       {/* listitem end */}
       {/* download from */}
       <MDBContainer>
          <MDBRow>
          <MDBCol>
          <MDBCard className="card-body" border="light" style={{ marginTop: "3rem" ,textAlign:'left' }}>
          <MDBRow>
          <MDBCol className="mt-1 font-small grey-text">
              <h5>Download MileHigh from your phone</h5>
              <p style={{lineHeight:'1.5'}}>Best travel deal on the go - only on MileHigh mobile!<br/>
                <span className="font-small grey-text">Download via SMS</span>
              </p>
              <form>
                {/* <label >Enter your mobile number</label> */}
              <MDBInputGroup containerClassName="mb-3 mt-0"hint="Enter your mobile number" type="tel" 
                append={ <MDBBtn color="amber" outline className="m-0 px-3 py-2 z-depth-0" type="submit">Confirm </MDBBtn>}
               required/>
            
              </form>
              <small>Give a missed call on 1800 7747 7575 to download the MileHigh app</small>
              <div>
                <a href="#!"><img src="/assets/app-store.svg" alt="" width="110px" height="50px" title="Download iOS App From Apple Store"/></a>
                <a  href="#!"><img src="/assets/google-play.svg" alt="" width="110px" height="33px" title="Download Andriod App From Play Store"/></a>
              </div>
            </MDBCol>
            <MDBCol className="float-right">
              <img src="https://milehighstore.s3.ap-south-1.amazonaws.com/assets/website/milehigh01.png" className="img-fluid" alt=""/>
            </MDBCol>
            </MDBRow>
            </MDBCard>
            </MDBCol>  
          </MDBRow>
       </MDBContainer>
       {/* end download form */}
       {/* start About mile high */}
       <MDBContainer>
          <MDBCard style={{ marginTop: "3rem" ,textAlign:'left' }}>
            <MDBCardBody>
              <h5 className= "orange-text">Why book with milehighstore.com?</h5>
              <MDBCardTitle tag="h6" sub className="mb-2 text-muted font-small">
              7 Brilliant reasons Yatra should be your one-stop-shop!
              </MDBCardTitle>
              <h6>Book Flights, Hotels, Trains, Buses, Cruise and Holiday Packages</h6>
              <MDBCardText className="font-small grey-text" style={{lineHeight:"1.5",fontWeight:'400' }} >
              On MileHighStore.Com, you can tailor your trip from end-to-end by scouring suitable flights and making your flight booking before proceeding with your hotel bookings. Yatra’s vast hotel repository will see you through this process seamlessly. Any intervening journey can be conveniently planned by searching up relevant train connectivity and making an IRCTC ticket booking.
              Look up well-researched holiday packages, sift through cruise packages and finalise your entire trip on just one platform.{" "}
              </MDBCardText>
              <a href="#!" className="card-link" gradient="peach">
                Read More...
              </a>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
       {/* end mile high */}
       {/* start footer */}
        <MDBContainer>
        <MDBCard style={{ marginTop: "3rem" ,textAlign:'left' }}>
          <MDBCardBody>
            <MDBRow>
            <MDBCol>
              <h5>Contact Us</h5>
              <p className="footer-effect font-small grey-text" style={{lineHeight:'1.5'}}><span>ENVISAGE</span> <br/>
                <span>Address E-42, Third Floor, Greater Kailash-1, New Delhi - 110048, India</span><br/>
                <span>Email: <a href="mailto:support@milehighstore.com">support@milehighstore.com</a></span></p>
            </MDBCol>
            <MDBCol>
              <h5>Keep In Touch</h5>
            <a href="#!" id="effects"><img src="https://www.milehighstore.com/assets/subscribe/images/facebook.svg" alt="facebook" title="Facebook" width="33px"/></a>
            <a href="#!" id="effects"><img src="https://www.milehighstore.com/assets/subscribe/images/twitter.svg" alt="twitter" title="Twitter" width="33px"/></a>
            <a href="#!" id="effects" title="instagram"><img src="https://www.milehighstore.com/assets/subscribe/images/instagram.svg" width="32px" alt="instagram"/></a>
            <a href="#!" id="effects"><img src="https://www.milehighstore.com/assets/subscribe/images/linkedin.svg" width="33px" alt="linkedIn" title="linkedIn"/></a>
            </MDBCol>
            <div className="copyright"><p> &copy; {new Date().getFullYear()} Copyright:
              <a href='https://www.milehighstore.com/'> milehighstore.com </a></p></div>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
       {/* end footer */}
       </MDBCol>
       {/* end left side data */}
       {/* form start */}
        <MDBCol md="4" className="column-2 px-2 mb-r float-left" >
        <MDBCard style={{ width: "30rem" }} className="affix">
        <MDBCardBody>
        <TabsDefault/>
        </MDBCardBody>
       </MDBCard>
       </MDBCol>
       {/* form end */}
       </MDBRow>
        </MDBContainer> 
          );
        }
      }
      
      export default Home;
      