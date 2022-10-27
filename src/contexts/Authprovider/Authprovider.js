import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../../firebase/firebase.init';
const auth=getAuth(app);
export const AuthContext=createContext();
const Authprovider = ({children}) => {
    const user={displayName:'poly'};
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const authInfo={user,createUser,logIn}
    return (
<AuthContext.Provider value={authInfo}>
    {children}
</AuthContext.Provider>
        
    );
};

export default Authprovider;