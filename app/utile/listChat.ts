export async function fetchPosts() {
  try {
    const response = await fetch("api/listChat");
    if (!response.ok) {
      throw new Error("Liste des postes indisponible");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
