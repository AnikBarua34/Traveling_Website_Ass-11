import React,{ useEffect, useState} from 'react';

import './BookedPlaces.css';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


const BookedPlaces = () => {
    
    // const {user}=useContextbase();
    const [booked,setBooked] = useState([]);
    useEffect(()=>[
        fetch('https://mighty-mesa-18218.herokuapp.com/allbooked')
        .then(res=>res.json())
        .then(data=>setBooked(data))
    ],[])

    const handleDelete=id=>{
      // confrim to delete 
      const confirmDelete =window.confirm('Are You Sure to delete this Package?? ')
    if(confirmDelete){
      fetch(`https://mighty-mesa-18218.herokuapp.com/allbooked${id}`,{
        method:'DELETE'})

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
        

            <h2 className="text-warning fw-bold m-2">ALL BOOKED Packages : {booked.length}</h2>
            
            {
                booked.map(book=> 
                  <Table key={book._id} className="bg-dark text-light mx-auto mt-3">
                  <Thead className="thead">
                    <Tr>
                      <Th>Package Name</Th>
                      <Th>User Name</Th>
                      <Th>Address</Th>
                      <Th>Date</Th>
                      <Th>Total Ticket</Th>
                      <Th>Delete Item</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td> {book.packageName} </Td>
                      <Td>{book.userName}</Td>
                      <Td>{book.address}</Td>
                      <Td>{book.date}</Td>
                      <Td>{book.ticket}</Td>
                      <Td><button className="btn btn-danger" onClick={()=>handleDelete(book._id)}><RiDeleteBin5Fill/>
      
      </button></Td>
                    </Tr>
                   
                  </Tbody>
                </Table>
                )
            }
        </div>
    );
};

export default BookedPlaces;