import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';
import { FaCarSide } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";






const Service = ({service}) => {

const {img,name,description,_id,price,duration}=service;
    return (
        <div className="service-container">
            
  
    <Col className="card-body">
      <Card className="card" border="danger"> 
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-primary fw-bold">Name : {name}</Card.Title>
          <Card.Text className="text-danger fw-bold">Price :BDT {price} <FcMoneyTransfer/></Card.Text>
          <Card.Text >Duration : {duration}</Card.Text>
          <Card.Text>{description}</Card.Text>

          {/* dynamic route */}

          <Link to={`/booking/${_id}`}
          ><button className="btn btn-dark"> <span className="text-warning">< FaCarSide/> </span> Book this Service</button></Link>
        </Card.Body>
      </Card>
    </Col>
  
          
        </div>
    );
};
export default Service;