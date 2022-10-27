import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.init';
const auth=getAuth(app);
export const AuthContext=createContext();
const Authprovider = ({children}) => {
    const [user,setUser]=useState({});
    const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut=()=>{
        return signOut(auth)
    }
   const googleLogIn=(provider)=>{
    return signInWithPopup(auth,provider)
   }
   const githubSignIn=(provider)=>{
    return signInWithPopup(auth,provider)
   }
   useEffect(()=>{
const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser);
    setLoading(false);
})
return ()=>{
    unsubscribe();
}
   },[])
    const authInfo={user,loading,createUser,logIn,googleLogIn,githubSignIn,logOut}
    return (
<AuthContext.Provider value={authInfo}>
    {children}
</AuthContext.Provider>
        
    );
};

export default Authprovider;