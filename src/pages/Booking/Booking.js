import React, { useEffect, useState,useRef } from 'react';
import { Col,Card, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useContextbase from '../hooks/useContextBase';
import './Booking.css';


const Booking = () => {
    const {user}=useContextbase();


    // Booking Section 
    const packageNameRef = useRef();
    const userNameRef = useRef();
    const userEmailRef = useRef();
    const addressRef = useRef();
    const dateRef = useRef();
    const ticketRef = useRef();
   
   
    

    const handleBooking =e=>{
const packageName = packageNameRef.current.value;
const userName = userNameRef.current.value;
const userEmail =  userEmailRef.current.value;
const address =  addressRef.current.value;
const date =  dateRef.current.value;
const ticket =  ticketRef.current.value;

e.preventDefault();

const newPackage = {packageName,userName, userEmail,address,date,ticket}
fetch('http://localhost:5000/allbookedpackage',{
method: 'POST',
headers: {
    'content-type':'application/json'
},
body: JSON.stringify(newPackage)

})
.then(res=>res.json())
.then(data=>{
    if(data.insertedId){
        alert('Package Booked Successfully !! Go to My Bookings to See This')
        e.target.reset();
    }
})
    }

    const {serviceId}=useParams();
    const [singleServices,setSingleServices]=useState([]);

    // This state is for Showing Details after click 
    const [singleService,setSingleService]=useState({});

    // This is for a load data 
    useEffect(()=>{
        fetch('http://localhost:5000/packages')
        .then(res=> res.json())
        .then(data=> setSingleServices(data))

    },[])
// This is will work when data loaded
   useEffect(()=>{
       const foundService = singleServices.find(service=> service._id == serviceId)
       setSingleService(foundService);
       console.log(foundService)
   },[singleServices])

    
    return (
        // dynamic id and booking form 
        <div className="booking-container mt-3 pt-5">
            <Row xs={1} md={2} lg={2} className="mt-5 pt-3">

                {/* DYNAMIC ID  */}

            <Col className=" text-dark fw-bold">
      <Card className="" border="warning"> 
        <Card.Img className="img mx-auto mt-3 p-1" style={{width:200}} variant="top" src={singleService?.img} />
        <Card.Body>
          <Card.Title>Service Name : {singleService?.name}</Card.Title>
          <Card.Text>Price :BDT ৳ {singleService?.price}</Card.Text>
          <Card.Text>{singleService?.description}</Card.Text>
          <HashLink to="/home#services"><button className="btn btn-danger">Book Another Package</button> </HashLink>
        </Card.Body>
      </Card>
    </Col> 
     
                {/* BOOKING FORM  */}

            <Col>
            <form  className="booking-form" onSubmit={handleBooking}>
            <h2 className="text-warning fw-bold mt-3 pt-3">Book This Service</h2>
            <input  type="text" defaultValue={singleService?.name} ref={packageNameRef}/>
            <input  type="text" defaultValue={user.displayName} ref={userNameRef} placeholder="Enter Name "/>
            <input  type="text" defaultValue={user.email} ref={userEmailRef} placeholder="Enter Email "/>
            <input  type="text" required  ref={addressRef} placeholder="Enter Your Current Address"/>
            <input  type="date" required  ref={dateRef} placeholder="Journey Date D.M.Y"/>
            <input  type="text" required  ref={ticketRef} placeholder="How much ticket Do you want?"/>
           
            
            <input className="btn btn-warning fw-bold mx-auto" type="submit" value="Book This Package"/>

                </form>
    </Col> 
    </Row>
        </div>
    );
};

export default Booking;