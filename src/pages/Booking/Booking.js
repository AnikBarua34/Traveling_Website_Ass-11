import React, { useEffect, useState } from 'react';
import { Col,Card, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useContextbase from '../hooks/useContextBase';
import './Booking.css';


const Booking = () => {
    // handle hook form 
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContextbase();
    const onSubmit = data => {
        console.log(data)
    };
    
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
        <div className="booking-container mt-5 pt-5 m-3">
            <Row xs={1} md={2} lg={2} className="g-5 p-5">

                {/* DYNAMIC ID  */}

            <Col className=" text-dark fw-bold">
      <Card className="" border="warning"> 
        <Card.Img className="img mx-auto mt-3 p-1" style={{width:300}} variant="top" src={singleService?.img} />
        <Card.Body>
          <Card.Title>Service Name : {singleService?.name}</Card.Title>
          <Card.Text>Price :BDT ৳ {singleService?.price}</Card.Text>
          <Card.Text>{singleService?.description}</Card.Text>
          <HashLink to="/home#services"><button className="btn btn-danger">Book Another Package</button> </HashLink>
        </Card.Body>
      </Card>
    </Col> 
     
                {/* BOOKING FORM  */}

            <Col className="">
      <Card className="" border="warning"> 
        
        <Card.Body>
        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

<input defaultValue={user.displayName} {...register("name")} />

<input defaultValue={user.email} {...register("email", { required: true })} />
{errors.email && <span className="error">This field is required</span>}
<input placeholder="Address" defaultValue="" {...register("address")} />
<input placeholder="City" defaultValue="" {...register("city")} />
<input placeholder="Phone Number" defaultValue="" {...register("phone")} />

<input className="btn btn-primary" type="submit" />
</form>  
        </Card.Body>
      </Card>
    </Col> 
    </Row>
        </div>
    );
};

export default Booking;