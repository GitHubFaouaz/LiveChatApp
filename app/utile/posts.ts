export async function fetchPosts() {
  try {
    const response = await fetch("api/posts");
    if (!response.ok) {
      throw new Error(" Postes indisponible");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
