"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./AddPost.module.css";
import { UserAuth } from "../context/AuthContext";
import Link from "next/link";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const { user } = UserAuth();

  const author = user && user.displayName;
  const pictureUrl = user && user.photoURL;
  const userUid = user && user.uid;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          author,
          pictureUrl,
          userUid,
        }),
      });

      if (res.ok) {
        alert("Ton post est créé");
        setTitle("");
        setDescription("");
        router.refresh();
      } else {
        throw new Error("failed to fetch");
      }
    } catch (error) {
      console.log(error);
    }
    return;
  };

  return (
    <>
      <section className={styles.backgroundFixed}>
        {user ? (
          <>
            <div className={styles["add-post"]}>
              <form
                onSubmit={handleSubmit}
                className={styles["form-container"]}
              >
                <label htmlFor="title">Titre</label>
                <input
                  value={title}
                  required
                  maxLength="30"
                  minLength="2"
                  type="text"
                  id="title"
                  placeholder="Un titre ...."
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="description">Description</label>
                <textarea
                  value={description}
                  name="description"
                  id="description"
                  maxLength="3000"
                  minLength="2"
                  required
                  placeholder="La première phrase est souvent la plus dure à dire...."
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <button className={styles.btn} type="submit">
                  Pulse !
                </button>
              </form>
            </div>
          </>
        ) : (
          <>
            <div className="text">
              <h1 className="h1">Inscris toi pour ton premier post !</h1>
              <p>
                PulseR : Votre Espace Social, Votre Communauté PulseR est bien
                plus qu'une simple application, c'est un espace social conçu
                pour vous permettre de créer, de connecter et d'interagir comme
                jamais auparavant.
              </p>
              <p>
                Créez et Partagez : PulseR vous donne le pouvoir de partager vos
                idées, vos expériences, et vos passions avec une communauté qui
                partage vos intérêts.
              </p>
              <p>
                Interagissez et Échangez : Discutez, échangez des idées, et
                établissez des connexions significatives avec des esprits
                créatifs du monde entier.
              </p>
              <p>
                Sécurité et Personnalisation : Votre vie privée est notre
                priorité. PulseR offre un contrôle total sur votre profil et vos
                informations.
              </p>
              <p>
                Innovation Continue : Nous évoluons constamment pour vous offrir
                de nouvelles fonctionnalités passionnantes. La seule limite est
                votre imagination.
              </p>
              <p>
                Rejoignez PulseR aujourd'hui et découvrez un espace où vos idées
                prennent vie, où la créativité s'épanouit, et où les connexions
                se forgent. Votre communauté PulseR vous attend.
              </p>
            </div>
          </>
        )}
      </section>
    </>
  );
}
