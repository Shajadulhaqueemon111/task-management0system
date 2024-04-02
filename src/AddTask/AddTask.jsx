import React from 'react';

const AddTask = () => {

    const hadelAddTask=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const description=e.target.description.value;

        const userTask={
            name,description
        }
        console.log(userTask)
        
    }
    return (
        <div className='bg-[#F4F3F0] p-24 '>
        <h2 className='text-3xl font-bold text-center mb-4'>Add-Task</h2>
        <p className='mb-4 text-center'>
            A to-do task is a concise description of an action or activity that needs to be completed, typically written in a brief, two-line format outlining the task and any essential details or deadlines.</p>
        <form onSubmit={hadelAddTask}>
            {/* Form row */}
            <div className=' md:flex gap-4'>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Task Name</span>
                    </label>
                    <label className="input-group">

                        <input  type="text" name='name' placeholder="Enter shoe name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name='description' placeholder="Enter task description" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            

            <button className="btn mt-4 btn-block bg-[#D2B48C]">Add</button>
        </form>
    </div>
    );
    

};

export default AddTask;