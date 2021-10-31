import React,{ useEffect, useState} from 'react';
import { Table} from 'react-bootstrap';
import './BookedPlaces.css';
import { RiDeleteBin5Fill } from 'react-icons/ri';


const BookedPlaces = () => {
    
    // const {user}=useContextbase();
    const [booked,setBooked] = useState([]);
    useEffect(()=>[
        fetch('http://localhost:5000/allbooked')
        .then(res=>res.json())
        .then(data=>setBooked(data))
    ],[])

    const handleDelete=id=>{
      // confrim to delete 
      const confirmDelete =window.confirm('Are You Sure to delete this Package?? ')
    if(confirmDelete){
      fetch(`http://localhost:5000/allbooked${id}`,{
        method:'DELETE'
        
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.deletedCount > 0){
alert('Deleted Successfully !')
const presentPackages = booked.filter(book=>book._id !==id)
setBooked(presentPackages)
        }
      })

    }
      
    }
    
    
    return (
        <div className="mt-5 pt-5 text-white">
        

            <h2>ALL BOOKED Places : {booked.length}</h2>
            
            {
                booked.map(book=> 
                    <Table key={book._id} className="table mx-auto" striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Package Name</th>
      <th>Username</th>
      <th>User Address</th>
      <th>Booking Date</th>
      <th>Total Ticket</th>
      
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{book.packageName}</td>
      <td>{book.userName}</td>
      <td>{book.address}</td>
      <td>{book.date}</td>
      <td>{book.ticket}</td>
      <td><button className="btn btn-danger" onClick={()=>handleDelete(book._id)}><RiDeleteBin5Fill/>
      
      </button></td>
      
    </tr>
  </tbody>
  
</Table>
                )
            }
        </div>
    );
};

export default BookedPlaces;