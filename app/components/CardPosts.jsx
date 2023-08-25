import Image from "next/image";
import styles from "./CardPosts.module.css";
import avatar from "../assets/images/eye.png";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import Link from "next/link";

const getPosts = async () => {
    const apiUrl = process.env.API_URL
  try {
    const res = await fetch(`${apiUrl}/api/posts`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Couldn't get posts");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading posts", error);
  }
};

const CardPosts = async () => {
  const { posts } = await getPosts();

  return (
    <>
      <section className={styles["card-container"]}>
        <h1 id="h1">Le mur des idées</h1>
        {/* Création d'un composant posts */}
        {posts.map((p) => (
          <div className={styles.cardPosts} key={p._id}>
            <div className={styles["infos-user"]}>
              <Image
                src={avatar}
                className={styles.imgCard}
                width={50}
                height={50}
                alt="avatar"
              />
              <h4>Claudius</h4>
              <h4>Brasseur</h4>
            </div>
            <div className={styles["infos-card"]}>
              <h4>{p.title}</h4>
              <p>{p.description}</p>
              <p>Posté le : {p.createdAt}</p>
            </div>
            <div className={styles.btnAll}>
              <Link href="/edit-post">
                <IconEdit size={24} color="green" />
              </Link>
              <Link href="/">
              <IconTrash size={24} color="red" />                
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default CardPosts;
