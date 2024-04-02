import React from 'react';
import { Link } from 'react-router-dom';
import { MdCreateNewFolder } from "react-icons/md";
const CreateTask = () => {
    return (
        <div>
          <div className='text-center'>
          <Link to='/addTask'>
           <h1 className='text-center mt-4 text-white text-2xl btn btn-primary font-bold '> create-A-New-Task <MdCreateNewFolder className='text-xl font-bold'></MdCreateNewFolder> </h1>
           </Link>
          </div>
        </div>
    );
};

export default CreateTask;