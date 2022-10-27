import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Authprovider/Authprovider';
import picture from '../Assets/picture.jpg'
const Header = () => {
  const [open,setOpen]=useState(false);
  const {user,logOut}=useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.error(error))
  }
  return (
    <div className="navbar bg-primary text-primary-content">
      
  <Link className="btn btn-ghost normal-case text-xl d-flex"><img style={{height:'30px',weight:'30px',marginRight:'10px'}}src={picture} alt=""/>Computer Learning Club</Link>
  
  <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
   <Link className="btn btn-ghost normal-case text-xl" to='/courses'>Courses</Link>
   <Link className="btn btn-ghost normal-case text-xl" to='/about'>About</Link>
   <Link className="btn btn-ghost normal-case text-xl" to='/blog'>Blog</Link>
   {
    open?<button onClick={()=>setOpen(!open)}>Dark</button>:
    <button onClick={()=>setOpen(!open)}>Light</button>
   }
   {
    user?.email? 
<button className="text-black" onClick={handleLogOut}>LogOut</button>:
<Link to='/login'><button className='btn btn-sm'>LogIn</button></Link>
   }
   
   
</div>
  );
};

export default Header;