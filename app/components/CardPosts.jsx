import Image from "next/image";
import styles from "./CardPosts.module.css";
import { IconEdit } from "@tabler/icons-react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";


const getPosts = async () => {
  const apiUrl = process.env.API_URL;
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
              <img
                src={p.pictureUrl ? p.pictureUrl : "https://www.gala.fr/imgre/fit/~1~gal~2022~11~03~3a8f53dd-e7b8-4033-9096-5b6e465cd886.jpeg/3578x3226/quality/80/georges-brassens.jpeg" } 
                className={styles.imgCard}
                width={50}
                height={50}
                alt="avatar"
              />
              <h4>{p.author ? p.author : 'Georgio'}</h4>
              <h4>Brasseur</h4>
            </div>
            <div className={styles["infos-card"]}>
              <h4>{p.title}</h4>
              <p>{p.description}</p>
              <p>Posté le : {p.createdAt}</p>
            </div>
            <div className={styles.btnAll}>
              <Link href={`/edit-post/${p._id}`}>
                <IconEdit size={24} color="green" />
              </Link>
              <RemoveBtn id={p._id} />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default CardPosts;
