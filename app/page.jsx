import AddPost from "./components/AddPost";
import CardPosts from "./components/CardPosts";


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
