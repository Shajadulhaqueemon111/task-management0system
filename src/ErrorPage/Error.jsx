import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <img className='text-center items-center w-full' src="https://i.ibb.co/P4znQgb/404-error-page-svg-animation.gif" alt="" />

            <div className='text-center mt-3'>
                <NavLink to="/">
            <button className='btn btn-outline btn-secondary w-full'>Go-To-Home-Page</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Error;