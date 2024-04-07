import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // Create User
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign in User
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign In With Google
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // SignIn With Github
    const gitHubSignIn = () => {
        return signInWithPopup(auth, gitHubProvider)
    }

    // SignIn With Facebook

    // SignIn With Twitter
    const twitterSignIn = () => {
        return signInWithPopup(auth, twitterProvider)
    }
    // SignIn With Facebook
    const facebookSignIn = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    // SignOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Observing : ", currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {
        user, setLoading, signUp, signIn, logOut, googleSignIn, gitHubSignIn, twitterSignIn,facebookSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
