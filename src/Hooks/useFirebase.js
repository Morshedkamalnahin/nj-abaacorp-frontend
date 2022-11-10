import React, { useEffect } from 'react'
import { useState } from 'react'
import firebaseInitialize from '../firebase/firebase.init'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

firebaseInitialize()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)

    }

    const logIn = (email2, password2) => {
        return signInWithEmailAndPassword(auth, email2, password2)

    }

    const logUp = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                const newUser = { email, displayName: name }
                setUser(newUser)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                setError(error)
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        })

    }, [auth])


    const logOut = () => {

        signOut(auth)
            .then(() => {
                console.log('logout')
            })
            .catch((error) => {
                // An error happened.
            })
    }

    return {
        googleSignIn, user, logOut, logUp, error, logIn
    }
}

export default useFirebase