"use client";
import styles from "./FormSignUp.module.css";
import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const FormProfileUpdate = () => {
  const { user, updateProfileInfo } = UserAuth();

  const router = useRouter();

  const userName = user && user.displayName;
  const userPhotoUrl = user && user.photoURL;
  const userMail = user && user.email;
  const userPassword = user && user.password;

  const [displayName, setDisplayName] = useState(userName);
  const [photoURL, setPhotoURL] = useState(userPhotoUrl);
  const [email, setEmail] = useState(userMail);
  const [password, setPassword] = useState(userPassword);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await updateProfileInfo(displayName, photoURL, email, password);
      alert("Profil update");
      router.push("/");
      router.refresh();
      router.refresh();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
    <section className={styles.signup}>
      <div className={styles["signup-background"]}>
        <h1 style={{textAlign: "center", margin: "0px 0 20px 0"}}>Bienvenu {userName} sur ta page de profil</h1>
        <form onSubmit={handleUpdate} className={styles["form"]}>
          <div className={styles["form-container"]}>
            <div>
              <label htmlFor="avatar">Photo Profil</label>
              <input
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                type="text"
                name="photo"
                id="avatar"
                placeholder="Lien https de l'image"
              />
            </div>
            <div>
              <label htmlFor="name">Nom</label>
              <input
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                maxLength="30"
                minLength="2"
                type="text"
                name="name"
                id="name"
                placeholder="DOE"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength="200"
                minLength="2"
                type="email"
                name="email"
                id="email"
                placeholder="bonjour.hello@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="password">Mot de Passe</label>

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                maxLength="30"
                minLength="8"
                name="password"
                id="password"
                placeholder="8 caractères min [A-Z;a-z] 0-9 !:;,?./§"
              />
              <div className={styles["btn-signin"]} style={{marginTop: "20px"}} >
              <button 
               type="submit">
                Modifier
              </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      </section>
    </>
  );
};

export default FormProfileUpdate;
