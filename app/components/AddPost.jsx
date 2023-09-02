"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./AddPost.module.css";
import { UserAuth } from "../context/AuthContext";



export default function AddPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");  
  const router = useRouter();
    
  const {user} = UserAuth()   

  const author = user && user.displayName
  const pictureUrl = user && user.photoURL

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ title, description, author, pictureUrl }),
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
      <div className={styles["add-post"]}>
        <form onSubmit={handleSubmit} className={styles["form-container"]}>
          <label htmlFor="title">Titre</label>
          <input
            value={title}
            required
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
            required
            placeholder="La première phrase est souvent la plus dure à dire...."
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button className={styles.btn} type="submit">Pulse !</button>
        </form>
      </div>
    </section>
    </>
  );
}
