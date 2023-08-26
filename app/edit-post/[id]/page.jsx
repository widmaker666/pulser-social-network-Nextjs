import EditPostForm from "@/app/components/EditPostForm";
import { IconHome } from "@tabler/icons-react";
import Link from "next/link";

const getPostById = async (id) => {

  const apiUrl = "http://localhost:3000"

  try {
    const res = await fetch(`${apiUrl}/api/posts/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};


export default async function EditPage({ params }) {
  const { id } = params;
  console.log(id);
  const { posts } = await getPostById(id);
  const { title, description } = posts;
  console.log(posts);

  return (
    <>
      <EditPostForm id={id} title={title} description={description} />
      <Link href="/">
        <IconHome size={50} color="blue" />
      </Link>
    </>
  );
}

