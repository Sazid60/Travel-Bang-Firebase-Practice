import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // Create User
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign in User
    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign In With Google

    // SignIn With Github

    // SignIn With Facebook

    // SignIn With Twitter


    // SignOut
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    } 

    // Observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Observing : ", currentUser)
            setUser(currentUser)
            setLoading(false)
          })
          return ()=>{
            unsubscribe();
          }
    },[])


    const authInfo = { user, setLoading, signUp, signIn,logOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
