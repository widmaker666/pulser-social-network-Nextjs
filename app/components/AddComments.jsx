"use client";

import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import styles from './CardPosts.module.css'

export default function AddComments({ idComment }) {
  const [comment, setComment] = useState("");
  const router = useRouter();

  const { user } = UserAuth();
  const pictureCommentUrl = user && user.photoURL;

  const handleComment = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ pictureCommentUrl, comment, idComment }),
      });

      if (res.ok) {
        alert("comment created");
        setComment("");
        router.refresh();
      } else {
        throw new Error("failed to fetch comment");
      }
    } catch (error) {
      console.log(error);
    }
    return;
  };

  return (
    <>
      <div className={styles["add-comment"]}>
        <img
          src={
            pictureCommentUrl 
              ? pictureCommentUrl 
              : "https://www.gala.fr/imgre/fit/~1~gal~2022~11~03~3a8f53dd-e7b8-4033-9096-5b6e465cd886.jpeg/3578x3226/quality/80/georges-brassens.jpeg"
          }
          className={styles.imgCard}
          width={29}
          height={29}
          alt="avatar"
        />
      
          
        <form onSubmit={handleComment}>
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            type="text"
            name="comment"
            id="comment"
            placeholder="Donne ton opinion..."
          />                    
          <button type="submit">pulse</button>          

        </form>        
         
      
      </div>
    </>
  );
}
