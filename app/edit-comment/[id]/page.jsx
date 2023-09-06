import EditCommentForm from "../../components/EditeCommentForm";

const getCommentById = async (id) => {
  const apiUrl = process.env.API_URL;

  try {
    const res = await fetch(`${apiUrl}/api/comments/${id}`, {
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
  const { comments } = await getCommentById(id);
  const { comment, userId } = comments;
  ;

  return (
    <>
      <EditCommentForm id={id} comment={comment} userId={userId} />
    </>
  );
}
