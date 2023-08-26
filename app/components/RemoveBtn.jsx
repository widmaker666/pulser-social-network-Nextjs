"use client";

import { IconTrash } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();

  const removePosts = async () => {
    
    const confirmed = confirm("Tu veux supprimer ton post ?");

    if (confirmed) {
      const res = await fetch(`/api/posts?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) { 
        alert("Le post vient d'être supprimé...")       
        router.refresh();
      }
    }
  };
  return (
    <button
      onClick={removePosts}
      id="delete"
      style={{ background: "transparent", border: "none" }}
    >
      <IconTrash size={24} color="red" />
    </button>
  );
}
