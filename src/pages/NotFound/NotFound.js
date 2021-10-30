import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Images/NotFound/notFound.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notFound m-5 p-3">
            <img src={img} alt="" /> <br />
            <Link to="/home"><button className="btn btn-dark m-2">Back to Home</button></Link>
        </div>
    );
};

export default NotFound;