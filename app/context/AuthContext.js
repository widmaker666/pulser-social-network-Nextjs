"use client"

import { useContext, createContext, useState, useEffect } from "react";
//-GOOGLE AUTH -//
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";

//- Password email AUTH -//
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,  
    
} from "firebase/auth";

import { auth } from "../firebase";
//-google auth//
const AuthContext = createContext();

//-password-email//
const UserContext = createContext();


export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //! Fonction pour s'inscrire grâce au googleAuthProvider() et la popup google signInWithPopup
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  //! Et la fonction pour se déconnecter avec le signOut(auth), auth qui est égale à la personne authentifiée
  const logOut = () => {
    signOut(auth);
  };

  //!---------------------------------------//
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
        });
    return () => unsubscribe;
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut, createUser, signIn }}>{children}</AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext, UserContext);
};
