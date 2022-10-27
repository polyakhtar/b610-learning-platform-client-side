import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/Authprovider/Authprovider';

const Login = () => {
    const {logIn}=useContext(AuthContext);
const handleLogIn=event=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password)
    logIn(email,password)
    .then(result=>{
        const user=result.user;
        console.log(user)
    })
    .catch(error=>console.error(error))

}
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Please Login now!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input  type="email" name="email" placeholder="email" className="input input-bordered w-100" />
              </div>
              <div className="">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered w-100" />
              </div>
              <div className=" mt-6">
                <button className="btn btn-primary w-100">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;