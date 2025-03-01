import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoIosLogIn } from "react-icons/io";
const Navbar = () => {

    const navLink=<>
    
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/service">Servises</NavLink></li>
    <li><NavLink to="/contact">Contacts</NavLink></li>
    
    </>


    return (
        <div>
            <div className="navbar shadow-md bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLink}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Getting this Done</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navLink}
    </ul>
  </div>
 
 <div className="navbar-end">
 <Link to='/login'>
    <a className="btn btn-outline btn-secondary text-2xl font-bold"><IoIosLogIn></IoIosLogIn></a>
    </Link>
  </div>

</div>
        </div>
    );
};

export default Navbar;