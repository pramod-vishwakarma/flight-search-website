import React from 'react';
import { MDBCard, MDBListGroup, MDBListGroupItem, MDBContainer,MDBCol,MDBView,MDBCardImage, MDBRow, MDBIcon } from "mdbreact";
const ListPanelPage = () => {
return (
<MDBContainer>
  <MDBCard style={{ width:'19rem', marginTop: "1rem" }}>
    <MDBListGroup>
      <MDBListGroupItem>
          <MDBRow>
            <MDBCol md="3"className='mt-1 float-left'>
             <MDBView>
              <MDBCardImage
               className='img-fluid rounded-circle z-depth-1'
               src='https://mdbootstrap.com/img/Photos/Avatars/img(30).jpg'
               alt='' width="60px" height="60px"/>
               </MDBView>
               </MDBCol>
               <MDBCol>
               <p className='mb-0 text-center holiday-destination'>
               <span style={{display:'block',textAlign:'left'}} className="mt-1 country">Australia</span>
               <span style={{display:'block' ,textAlign:'left',color:'#ffa100'}} className="mt-1 price">Rs 17,999<small style={{color:'#b2b2b2'}}>/ Person</small> <MDBIcon className="pl-4" icon="arrow-right" /></span>
               <small className="mt-1 day" style={{display:'block' ,textAlign:'left'}}>9 Nights/ 10 Days</small>
               </p>
               </MDBCol>
               </MDBRow>
      </MDBListGroupItem>
      <MDBListGroupItem><MDBRow>
            <MDBCol md="3"className='mt-1 float-left'>
             <MDBView>
              <MDBCardImage
               className='img-fluid rounded-circle z-depth-1'
               src='https://mdbootstrap.com/img/Photos/Avatars/img(30).jpg'
               alt='' width="60px" height="60px"/>
               </MDBView>
               </MDBCol>
               <MDBCol>
               <p className='mb-0 text-center holiday-destination'>
               <span style={{display:'block',textAlign:'left'}} className="mt-1 country">Australia</span>
               <span style={{display:'block' ,textAlign:'left',color:'#ffa100'}} className="mt-1 price">Rs 17,999<small style={{color:'#b2b2b2'}}>/ Person</small> <MDBIcon className="pl-4" icon="arrow-right" /></span>
               <small className="mt-1 day" style={{display:'block' ,textAlign:'left'}}>9 Nights/ 10 Days</small>
               </p>
               </MDBCol>
               </MDBRow></MDBListGroupItem>
      <MDBListGroupItem>
        <MDBRow>
            <MDBCol md="3"className='mt-1 float-left'>
             <MDBView>
              <MDBCardImage
               className='img-fluid rounded-circle z-depth-1'
               src='https://mdbootstrap.com/img/Photos/Avatars/img(30).jpg'
               alt='' width="60px" height="60px"/>
               </MDBView>
               </MDBCol>
               <MDBCol>
               <p className='mb-0 text-center holiday-destination'>
               <span style={{display:'block',textAlign:'left'}} className="mt-1 country">Australia</span>
               <span style={{display:'block' ,textAlign:'left',color:'#ffa100'}} className="mt-1 price">Rs 17,999<small style={{color:'#b2b2b2'}}>/ Person</small> <MDBIcon className="pl-4" icon="arrow-right" /></span>
               <small className="mt-1 day" style={{display:'block' ,textAlign:'left'}}>9 Nights/ 10 Days</small>
               </p>
               </MDBCol>
               </MDBRow>
               </MDBListGroupItem>
        <MDBListGroupItem>
        <MDBRow>
            <MDBCol md="3"className='mt-1 float-left'>
             <MDBView>
              <MDBCardImage
               className='img-fluid rounded-circle z-depth-1'
               src='https://mdbootstrap.com/img/Photos/Avatars/img(30).jpg'
               alt='' width="60px" height="60px"/>
               </MDBView>
               </MDBCol>
               <MDBCol>
               <p className='mb-0 text-center holiday-destination'>
               <span style={{display:'block',textAlign:'left'}} className="mt-1 country">Australia</span>
               <span style={{display:'block' ,textAlign:'left',color:'#ffa100'}} className="mt-1 price">Rs 17,999<small style={{color:'#b2b2b2'}}>/ Person</small> <MDBIcon className="pl-4" icon="arrow-right" /></span>
               <small className="mt-1 day" style={{display:'block' ,textAlign:'left'}}>9 Nights/ 10 Days</small>
               </p>
               </MDBCol>
               </MDBRow>
               </MDBListGroupItem> 
    </MDBListGroup>
  </MDBCard>
</MDBContainer>
);
};

export default ListPanelPage;