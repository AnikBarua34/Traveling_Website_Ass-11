import { useEffect, useState } from 'react';
import initializeAuthentication from '../FireBase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";

// calling firebase initialize  
initializeAuthentication();


const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFireBase = () => {
    const [user,setUser] =useState([]);
    const [isLoading,setIsloading]=useState(true);


    const signInWithGoogle = ()=>{
        setIsloading(true)
       return signInWithPopup(auth, googleProvider)
       .finally(()=>setIsloading(false))
    };

    const logOut=()=>{
        setIsloading(true);
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(()=>setIsloading(false))
    }

        useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
            }
            else{

            }
            setIsloading(false);
        });
            
    },[]);
    

    return {
user,signInWithGoogle,logOut,isLoading
    };
};

export default useFireBase;