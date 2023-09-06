"use client";

import { IconTrash } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { UserAuth } from "../context/AuthContext";

export default function RemoveBtn({ id, userUid }) {
  const router = useRouter();
  const { user } = UserAuth();
  const uid = user && user.uid;

  const removePosts = async () => {
    const confirmed = confirm("Tu veux supprimer ton post ?");

    if (confirmed && userUid === uid) {
      const res = await fetch(`/api/posts?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        alert("Le post vient d'être supprimé...");
        router.refresh();
      }
    } else {
      alert("Ce n'est pas ton post");
      router.push("/login");
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
