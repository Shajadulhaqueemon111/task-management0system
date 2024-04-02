import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRightLong } from "react-icons/fa6";
const ContactCard = ({contact}) => {

    const {name,image,email,phone}=contact;
    const imageSize = {
        height: "200px",

    }
    useEffect(() => {
        Aos.init({
          duration: 1000, // Animation duration in milliseconds
          offset: 200, // Offset (in pixels) from the top of the viewport
        });
      }, []);
    return (
        <div data-aos="zoom-in-up" >

        <div  className="card card-compact  bg-base-100 shadow-md">
            <figure><img style={imageSize} src={image} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="text-xl font-bold">{name}</h2>
                <p>{email}</p>
                <p>{phone}</p>
                <div className="text-center ">
                    <button className='btn  btn-primary'> Read More<FaArrowRightLong></FaArrowRightLong> </button>
                </div>
            </div>
        </div>

    </div>
    );
};

export default ContactCard;