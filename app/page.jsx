import AddPost from "./components/AddPost";
import CardPosts from "./components/CardPosts";

//o
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
