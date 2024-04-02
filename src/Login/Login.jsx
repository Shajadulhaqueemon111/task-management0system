import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

  const imazeSize={
    height:"600px"
  }
  const {userSingIn}=useContext(AuthContext)

  const hadelLogin=(e)=>{
    e.preventDefault()
    const email=e.target.email.value;
    const password=e.target.password.value;

    const userLogin={
      email,password
    }
    console.log(userLogin)
    if(password.length<6){
      Swal.fire({
        title: "Firebase: Error (auth/invalid-login-credentials).",
        text: "You clicked the button!",
        icon: "error",
      });
     }else{
      Swal.fire({
        title: "You have been successfully Login",
        text: "You clicked the button!",
        icon: "success",
      });
     }


    userSingIn(email,password)
    .then(res=>{
      const loggedInUser=res.user
        console.log(loggedInUser)
        // navigate(location?.state? location.state:'/')
        const user={email}
        // axios.post('https://hotel-room-booking-server-eight.vercel.app/jwt',user,{withCredentials:true})
        .then(res=>{
          console.log(res.data)
          if(res.data.success){
             navigate(location?.state? location.state:'/')
          }
        })
    })
    .catch(error=>{
        console.log(error)
    })
  }


    return (
        <div>
            <div className="hero min-h-screen  bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
     
     <img style={imazeSize} src="https://i.ibb.co/bPh18tS/621405faf156b68381c89877-Untitled-design.gif" alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm  bg-base-100">
      <form onSubmit={hadelLogin} className="card-body">
      <h1 className="text-2xl text-center font-bold">Sing-In</h1>
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
        
        <p>Don’t have an account yet? <Link className='text-blue-500 font-bold' to="/register">Sign up</Link></p>
        
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;