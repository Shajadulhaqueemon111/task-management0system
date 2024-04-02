import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';
import Swal from 'sweetalert2';


const Register = () => {
  const imazeSize={
    height:"600px"
  }

  
  const {userSingUp}=useContext(AuthContext)
  const location=useLocation()
  const navigate=useNavigate()

  const handelRegister= async(e)=>{
      e.preventDefault()
      const name=e.target.name.value;
      const email=e.target.email.value;
      const password=e.target.password.value;
      
      const newUser={name,
          email,
         password
     }
     console.log(newUser)

    
     if(password.length<6){
      Swal.fire({
        title: "FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password).",
        text: "You clicked the button!",
        icon: "error",
      });
     }else{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
      navigate(location?.state? location.state:'/')
     }
    

     try {
      const res = await userSingUp(email, password);
      console.log(res.user);
    } catch (error) {
      console.log(error);
    }
  }
 
  

  
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      
   <img style={imazeSize} src="https://i.ibb.co/bPh18tS/621405faf156b68381c89877-Untitled-design.gif" alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm  bg-base-100">
      <form onSubmit={handelRegister} className="card-body">
      <h1 className="text-2xl text-center font-bold">Sing-Up</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name='name' type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

        <p>Alredy Have An Account please ? <Link className='text-blue-500 font-bold' to="/login">Sign up</Link></p>
      </form>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Register;