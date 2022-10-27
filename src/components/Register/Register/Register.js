import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/Authprovider/Authprovider';

const Register = () => {
    const {createUser}=useContext(AuthContext);
    const handleRegister=event=>{
        event.preventDefault();
        const form=event.target;
    const name=form.name.value;
    const photoURL=form.photoURL.value;
    const email=form.email.value;
    const password=form.password.value;
    //  console.log(name,photoURL,email,password)
    createUser(email,password)
    .then(result=>{
        const user=result.user;
        // console.log(user)
    })
    .catch(error=>console.error(error))
    }
  
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
     <div className="hero-content flex-col">
       <div className="text-center">
         <h1 className="text-5xl font-bold">Please Login now!</h1>
         
       </div>
       <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
         <form onSubmit={handleRegister} className="card-body">
           <div className="">
             <label className="label">
               <span className="label-text">Name</span>
             </label>
             <input  type="text" name='name' placeholder="Your Name" className="input input-bordered w-100" />
           </div>
           <div className="">
             <label className="label">
               <span className="label-text">PhotoURL</span>
             </label>
             <input  type="text" name='photoURL' placeholder="Your PhotoURL" className="input input-bordered w-100" />
           </div>
           <div className="">
             <label className="label">
               <span className="label-text">Email</span>
             </label>
             <input  type="email" name='email' placeholder="email" className="input input-bordered w-100" />
           </div>
           <div className="">
             <label className="label">
               <span className="label-text">Password</span>
             </label>
             <input type="password" name='password' placeholder="password" className="input input-bordered w-100" />
           </div>
           <div className=" mt-6">
             <button className="btn btn-primary w-100">Login</button>
           </div>
         </form>
       </div>
     </div>
   </div>
           </div>
    );
    };

export default Register;