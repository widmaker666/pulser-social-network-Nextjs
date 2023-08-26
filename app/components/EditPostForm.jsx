"use client";

import { useState } from "react";
import styles from "./AddPost.module.css";
import { useRouter } from "next/navigation";

export default function EditPostForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  const handleSubmit = async (e) => {
    const apiUrl = "http://localhost:3000";
    const confirmed = confirm("tu es sur de modifier ce post ?");
    e.preventDefault();

    try {
      if (confirmed) {
        const res = await fetch(`${apiUrl}/api/posts/${id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ newTitle, newDescription }),
        });

        if (!res.ok) {
          throw new Error("failed to fetch post");
        }
        alert("Tu viens de modifier ton post");
        router.refresh();
        router.push("/");
      }
    } catch (error) {
      console.log("doesn't work", error);
    }
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          textTransform: "capitalize",
          letterSpacing: "5px",
        }}
      >
        Modifie ton poste
      </h1>
      <div className={styles["add-post"]}>
        <form onSubmit={handleSubmit} className={styles["form-container"]}>
          <label htmlFor="title">Title</label>
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            required
            type="text"
            id="title"
            placeholder="You wanna talk to ?"
          />
          <label htmlFor="description">Description</label>
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            name="description"
            id="description"
            required
            placeholder="Tell us about your story"
          ></textarea>
          <button type="submit">Pulse it !</button>
        </form>
      </div>
    </>
  );
}
