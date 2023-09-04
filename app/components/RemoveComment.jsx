"use client";

import { IconTrash } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { UserAuth } from "../context/AuthContext";

export default function RemoveBtn({ id, userId }) {

  const router = useRouter();
  const {user} = UserAuth()
  const userUid = user && user.uid  

  const removeComment = async () => {    
    
    const confirmed = confirm("Tu veux supprimer le commentaire ?");

    if (confirmed && userUid === userId ) {
      const res = await fetch(`/api/comments?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) { 
        alert("Le commentaire vient d'être supprimé...")       
        router.refresh();
      }
    }else{
        alert("Le commentaire ne t'appartient")
        router.push("/login")
    }
  };

  return (
    <button
      onClick={removeComment}
      id="delete"
      style={{ background: "transparent", border: "none" }}
    >
      <IconTrash size={24} color="red" />
    </button>
  );
}
