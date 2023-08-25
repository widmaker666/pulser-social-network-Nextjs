//! Function getTopics async to get all topics

const getPosts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("failed to fetch");
    }
    return res.json();
  } catch (error) {
    console.log("error fetching topics", error);
  }
};

export default function PostsList(){
    return (
        <>
        
        </>
    )
}
