"use client";

import styles from "./FormSignUp.module.css";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FormLogin = () => {
  const { signIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signIn(email, password);
      alert("Content de vous revoir !");
      router.push("/");
    } catch (e) {
      setError(e.message);
      alert("Erreur dans le mot de passe ou le mail !");
      console.log(e.message);
    }
  };

  return (
    <>
      <section className={styles.signup}>
        <div className={styles["signup-background"]}>
          <div className={styles["title-container"]}>
            <h1>Page de Connexion</h1>
            <p>
              Tu n'as pas de compte ? Inscris toi maintenant
              <Link href="/signin"> ICI</Link>
            </p>
          </div>
          <form onSubmit={handleSubmit} className={styles["form"]}>
            <div className={styles["form-container"]}>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength="100"
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="bonjour.hello@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="password">Mot de Passe</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  maxLength="30"
                  minLength="8"
                  required
                  type="password"
                  name="password"
                  id="password"
                  placeholder="6 caractères min [A-Z;a-z] 0-9 !:;,?./§"
                />
              </div>
              <div className={styles["btn-signin"]}>
                <button type="submit">Valider</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default FormLogin;
