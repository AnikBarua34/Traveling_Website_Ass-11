import React from 'react';
import { BsTrophyFill } from "react-icons/bs";

const AboutUs = () => {
    return (
        <div className="mt-5 pt-5 m-3">
            <div className="p-3 bg-light text-primary fw-bold border border-danger border-3 rounded">
            <h1><BsTrophyFill /> OUR STORY <BsTrophyFill /></h1>
            </div>

            <div className="mt-4 p-3 bg-light text-dark border border-danger border-3 rounded">
                <p>Mind Fresher is a mind relexing website ! It estabilished in 30.10.2021 !! WE are planing to make our site BIGGER, and we always want to see our customers HAPPY !
                    We want to satisfied our customers !! So we have arranged many Sweet PICNIC SPOT to fresh your mind
                     ! You can visit with your full family members. We believe that family is our strength ! Every body wants to travel with their family but sometimes it will go against available money ! So we have arranged some offers called
                      FamilyPack : 3 Tickets for maximum 7 members ! and we are planing for  many more Offers !! </p>
            </div>

            <div className="mt-2 mb-5 p-3 bg-light text-dark border border-danger border-3 rounded">
                <h5>Website Owner</h5>
                <p>ANIK BARUA TURJOY</p>
            </div>
            
        </div>
    );
};

export default AboutUs;