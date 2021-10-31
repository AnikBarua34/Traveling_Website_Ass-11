import React from 'react';
import { GiTigerHead} from "react-icons/gi";
import { BsFacebook} from "react-icons/bs";
import { BsTwitter} from "react-icons/bs";
import { IoLogoYoutube} from "react-icons/io";

const Footer = () => {
    return (
        <div className="bg-dark text-light mt-5 pt-5">

            <div className="mt-1 p-3">
            <h3 className="text-warning" ><GiTigerHead/>Mind Fresher</h3>
            <p>A Mind Fresher Company Ltd.</p>
            <h2> <span className="text-primary"><BsFacebook/></span>  <span className="text-danger"><IoLogoYoutube/></span> <span className="text-success"><BsTwitter/></span></h2>
            <p>Copyright@ANIK_BARUA_TURJOY_2021</p> <br />
            <p>P.HERO_4th_Batch</p>
            </div>


        
        </div>
    );
};

export default Footer;