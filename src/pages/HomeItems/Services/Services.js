import React, { useEffect, useState } from 'react';
import { Row, Spinner,Button } from 'react-bootstrap';
import Service from '../Service/Service';
import { BsFillHandbagFill } from "react-icons/bs";
import useContextbase from '../../hooks/useContextBase';

const Services = () => {
    const {isLoading} =useContextbase();
    if(isLoading){
        <Spinner animation="border" variant="primary" />
    }
    
    const [services,setServices]=useState([]);


    useEffect(()=>{
fetch('https://mighty-mesa-18218.herokuapp.com/packages')
.then(res=> res.json())
.then(data=> setServices(data))

    },[])
    return (
        <div id="services">
            
            <div  className="mt-3 fw-bold text-light">
            <h2><BsFillHandbagFill/> Main Offering Packages <BsFillHandbagFill /></h2>
            <p>-------------------------------------------</p>
            </div>
            

            <div>
                {
                    services.length < 1?<Button variant="danger">
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading......
                  </Button>
                  :
                    <Row xs={1} md={2} lg={3} className="g-3 m-3 rounded">
            {
                services.map(service=> <Service key={service._id} service={service}
                ></Service>)
            }
            </Row>
                }
            
            </div>
            
        </div>
    );
};

export default Services;