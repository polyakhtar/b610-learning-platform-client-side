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
      
  <Link className="btn btn-ghost normal-case text-xl d-flex"><img style={{height:'20px',weight:'20px',marginRight:'10px',borderRadius:'10px'}}src={picture} alt=""/>Computer Learning Course</Link>
  
  <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
   <Link className="btn btn-ghost normal-case text-xl" to='/courses'>Courses</Link>
   <Link className="btn btn-ghost normal-case text-xl" to='/about'>About</Link>
   <Link className="btn btn-ghost normal-case text-xl" to='/blog'>Blog</Link>
   {
    open?<button className='text-black'onClick={()=>setOpen(!open)}>Dark</button>:
    <button className='text-white' onClick={()=>setOpen(!open)}>Light</button>
   }
   {
    user?.uid &&<span>{user.displayName}</span>
   }
   {
    user?.uid? 
<button className="text-black m-2" onClick={handleLogOut}>LOGOUT</button>:
<Link to='/login'><button className='btn btn-sm'>LOGIN</button></Link>
   }
   
   
</div>
  );
};

export default Header;