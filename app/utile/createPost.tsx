interface PostData {
  // idUser: string | null;
  name: string | null;
  email: string | null;
  image: string | null;
  value: string;
}

export default async function createPost({
  // idUser,
  name,
  email,
  image,
  value,
}: PostData) {
  try {
    const response = await fetch("/api/createPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // idUser,
        name,
        email,
        image,
        desc: value,
      }),
    });

    if (!response.ok) {
      throw new Error("Erreur lors de la création du post");
    }

    const data = await response.json();
    console.log("Post créé avec succès:", data);
  } catch (error) {
    console.error("Erreur:", error);
  }
}
