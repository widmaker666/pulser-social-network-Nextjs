"use client";

import { useContext, createContext, useState, useEffect } from "react";
//-GOOGLE AUTH -//
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  updateProfile,
  deleteUser,
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

  //! --------------------------------------- //
  const createUser = (email, password, displayName, photoURL) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;

        return updateProfile(auth.currentUser, {
          displayName: displayName,
          photoURL: photoURL,
        }).then(() => {
          return user;
        });
      }
    );
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const deleteAccount = () => {
    const user = auth.currentUser;

    if (user) {
      // Utilisez la méthode deleteUser pour supprimer le compte
      deleteUser(user)
        .then(() => {
          // La suppression du compte a réussi
          alert("Compte utilisateur supprimé avec succès.");
        })
        .catch((error) => {
          // Gérez les erreurs de suppression de compte
          console.error("Erreur lors de la suppression du compte :", error);
        });
    }
  };

  const updateProfileInfo = (displayName, photoURL, email, password) => {
    const user = auth.currentUser;

    if (user) {
      // Utilisez la méthode updateProfile pour mettre à jour le profil
      updateProfile(user, {
        displayName: displayName,
        photoURL: photoURL,
        email: email,
        password: password,
      })
        .then(() => {
          // La mise à jour du profil a réussi
          console.log("Profil utilisateur mis à jour avec succès.");
        })
        .catch((error) => {
          // Gérez les erreurs de mise à jour de profil
          console.error("Erreur lors de la mise à jour du profil :", error);
        });
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe;
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        googleSignIn,
        logOut,
        createUser,
        signIn,
        deleteAccount,
        updateProfileInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
