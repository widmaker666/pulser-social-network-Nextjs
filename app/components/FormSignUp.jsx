"use client";

import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import styles from "./FormSignUp.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const FormSignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [error, setError] = useState("");

  const { createUser } = UserAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await createUser(email, password);
      alert("Vous êtes connecté");
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <>
      <section className={styles.signup}>
        <div className={styles['signup-background']}>
        <div className={styles["title-container"]}>
          <h1>Page d'inscription</h1>
          <p>
            Tu as déjà un compte ? Connecte toi maintenant
            <Link href="/login"> ICI</Link>
          </p>
        </div>
        <form onSubmit={handleSubmit} className={styles["form"]}>
          <div className={styles["form-container"]}>
            <div>
              <label htmlFor="name">Nom</label>
              <input
                onChange={(e) => setDisplayName(e.target.value)}
                type="text"
                name="name"
                id="name"
                placeholder="DOE"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="bonjour.hello@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="password">Mot de Passe</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="6 caractères min [A-Z;a-z] 0-9 !:;,?./§"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">
                Confirmation du Mot de Passe
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="6 caractères min A-Z;a-z 0-9 !:;,?./§"
              />
            </div>
            <div className={styles["checkbox-container"]}>
              <input type="checkbox" name="RGPD" id="rgpd" />
              <label htmlFor="rgpd">
                Accepter les <Link href="/rgpd">RGPD</Link>, la politique de
                protection des données
              </label>
            </div>
          </div>
          <div className={styles["btn-signin"]}>
            <button type="submit">Valider</button>
          </div>
        </form>
        </div>
      </section>
    </>
  );
};

export default FormSignUp;
