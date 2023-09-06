"use client";

import { useState } from "react";
import styles from "./AddPost.module.css";
import { useRouter } from "next/navigation";
import { UserAuth } from "../context/AuthContext";

export default function EditCommentForm({ id, comment, userId }) {
  const [newComment, setNewComment] = useState(comment);
  
  const router = useRouter();

  const { user } = UserAuth();
  const editCommentUserId = user && user.uid;

  console.log(editCommentUserId, userId);

  const handleSubmitComment = async (e) => {
    const confirmed = confirm("Tu veux modifier ton commentaire ?");
    e.preventDefault();

    try {
      if (confirmed && editCommentUserId === userId) {
        const res = await fetch(`/api/comments/${id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ newComment }),
        });

        if (!res.ok) {
          throw new Error("failed to fetch comment");
        }
        alert("Tu viens de modifier ton commentaire !");
        router.push("/");
        router.refresh()
      } else {
        alert("Ce n'est pas ton commentaire ou tu n'es pas connecté");
        router.push("/login");
      }
    } catch (error) {
      console.log("doesn't work", error);
    }
  };

  return (
    <>
      <section className={styles.backgroundFixed} style={{ height: "100vh" }}>
        <h1
          style={{
            margin: 0,
            paddingTop: "30px",
            paddingBottom: "10px",
            textAlign: "center",
            textTransform: "capitalize",
            color: "whitesmoke",
            letterSpacing: "2px",
            fontSize: "2rem",
          }}
        >
          Modifie ton commentaire
        </h1>
        <div className={styles["add-post"]}>
          <form onSubmit={handleSubmitComment} className={styles["form-container"]}>
            <label htmlFor="comment">Commentaire</label>
            <input
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
              maxLength="3000"
              minLength="2"
              type="text"
              id="comment"
              placeholder="Donne ton avis ?"
            />
            <button className={styles.btn} type="submit">
              Pulse !
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
