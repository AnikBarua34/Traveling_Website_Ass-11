import React from 'react';
import { Card } from 'react-bootstrap';

const FreeOffers = () => {
    return (
        <div>

            <div className="m-5 p-5">
            <h4 className="m-3 text-warning fw-bold">Our  Offers</h4>

          
<Card className="" border="warning"> 

  <Card.Body>
  
    <Card.Text>You can book a PICNIC SPOT for all od yours family members ! We believe that family is our strength ! Every body wants to travel with their family but sometimes it will go against available money ! So we have arranged some offers called FamilyPack : 3 Tickets for maximum 7 members ! Is that Interesting ?? we know absolutely yes !! SO Contact with us hurry !!
        
          </Card.Text>
          <h4 className="text-primary fw-bold">Availbale Packages</h4>
          <p> 2 Ticket : 5 members</p> <br />
          <p> 4 Ticket : 8 members</p> <br />
          <p> 6 Ticket : 14 members</p> <br />
          <p> 8 Ticket : 17 members</p> <br />
          <p> 10 Ticket : 20 members</p> <br />
          <p> 15 Ticket : 40 members</p> <br />
  

  </Card.Body>
</Card>
            </div>
            
    
        </div>
    );
};

export default FreeOffers;