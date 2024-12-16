
export async function fetchUsers() {
  try {
    const response = await fetch("/api/users");
    if (!response.ok) {
      throw new Error("Erreur lors du chargement des utilisateurs");
    }
    return await response.json();
  } catch (error) {
    console.error("Erreur :", error);
    throw error;
  }
}
