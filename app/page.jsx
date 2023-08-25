import AddPost from "./components/AddPost";
import CardPosts from "./components/CardPosts";
//p

export default function Home() {
  return (
    <>
      <AddPost />
      <section className="card-container">
        <CardPosts />
      </section>
    </>
  );
}
