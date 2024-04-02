import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRightLong } from "react-icons/fa6";
const ServiceCard = ({ service }) => {

    const { name, image, date } = service;

    const imageSize = {
        height: "200px",

    }
    const CardSize = {
        hight: "500px"
    }
    useEffect(() => {
        Aos.init({
          duration: 1000, // Animation duration in milliseconds
          offset: 200, // Offset (in pixels) from the top of the viewport
        });
      }, []);
    return (
        <div  data-aos="zoom-in-up" >

            <div style={CardSize} className="card card-compact  bg-base-100 shadow-md">
                <figure><img style={imageSize} src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p>{date}</p>
                    <div className="card-actions">
                        <button className='btn btn-primary'> Read More<FaArrowRightLong></FaArrowRightLong> </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;