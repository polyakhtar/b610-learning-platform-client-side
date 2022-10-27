import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Authprovider/Authprovider';

const Login = () => {
    const {logIn,googleLogIn,githubSignIn}=useContext(AuthContext);
    const githubProvider=new GithubAuthProvider();
    const googleProvider=new GoogleAuthProvider();
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';
    const handleGithubSignIn=()=>{
      githubSignIn(githubProvider)
      .then(result=>{
        const user=result.user;
        console.log(user)
      })
      .catch(error=>console.error(error))
    }
    const handleGooleSignIn=()=>{
      googleLogIn(googleProvider)
      .then(result=>{
        const user=result.error;
        console.log(user)
      })
      .catch(error=>console.error(error))
    }
const handleLogIn=event=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password);
    logIn(email,password)
    .then(result=>{
        const user=result.user;
        console.log(user);
        form.reset();
        navigate(from,{replace:true});
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
              <p>New to this website ? Please <Link to='/register'>Register</Link></p>
            </form>
            <Button onClick={handleGooleSignIn} variant="primary">GOOGLE SIGN IN</Button>
            <br></br>
            <Button onClick={handleGithubSignIn} variant="primary">GITHUB SIGN IN</Button>
          </div>
        </div>
      </div>
    );
};

export default Login;