import React,{useRef} from 'react';
import './AddPackage.css';


const AddPackages = () => {

    const nameRef = useRef();
    const priceRef = useRef();
    const durationRef =useRef();
    const descriptionRef =useRef();
    const imgRef =useRef();
    

    const handleAddUser =e=>{
const name = nameRef.current.value;
const price = priceRef.current.value;
const duration =durationRef.current.value;
const description =descriptionRef.current.value;
const img =imgRef.current.value;

e.preventDefault();

const newPackage = {name,price,duration,description,img}
fetch('https://mighty-mesa-18218.herokuapp.com/newpackage',{
method: 'POST',
headers: {
    'content-type':'application/json'
},
body: JSON.stringify(newPackage)

})
.then(res=>res.json())
.then(data=>{
    if(data.insertedId){
        alert('Package Added Successfully !! Go HomePage to See This')
        e.target.reset();
    }
})
    }
    
    return (
        <div>
            <div className="mt-5 pt-5">

            
            <form  className="add-package-form" onSubmit={handleAddUser}>
            <h2 className="text-warning fw-bold mt-3 pt-3">Add a New Package in your Page</h2>
            <input className="mx-auto" type="text" ref={nameRef} placeholder="Enter Package Name" />
            <input className="mx-auto" type="text" ref={priceRef} placeholder="Enter Price" />
            <input className="mx-auto" type="text" ref={durationRef} placeholder="Enter Duration" />
            <textarea className="mx-auto" type="text" ref={descriptionRef} placeholder="Enter Description" name="" id="" cols="15" rows="5"></textarea>
            <input className="mx-auto" type="text" ref={imgRef} placeholder="Enter any Image URL" />
            
            <input className="btn btn-warning fw-bold mx-auto" type="submit" value="Add Package"/>

                </form>
            
        </div>
        </div>
    );
};

export default AddPackages;