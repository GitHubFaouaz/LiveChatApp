import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import userInfo from "../utile/userInfo";
import createPost from "../utile/createPost";
import { fetchUsers } from "../utile/usersList";

type User = {
  id: string;
  name?: string;
  email: string;
  image?: string;
  // createdAt?: string;
  // updatedAt?: string;
};

export default function SendMessage() {
  const [value, setValue] = useState("");
  const userSignin = userInfo();
  const [usersList, setUsersList] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  // recuperation de tous les users de la DB
  useEffect(() => {
    fetchUsers()
      .then(setUsersList)
      .catch((error) => setError((error as Error).message));
  }, []);

  // pour recuperer la value de l'input
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valInput = e.target.value;
    setValue(valInput);
    console.log(value);
  };

  if (!userSignin) {
    console.error("Utilisateur non connecté");
    return;
  }

  console.log("liste users dans la DB", usersList);

  // on verifie si lutilisateur connecté est dans la base de donnée pour ensuite recuperer son id
  const findUserDb = usersList.find((user) => user.email === userSignin.email);
  console.log("findUserDb", findUserDb?.id);

  // pour soumettre le formulaire
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!findUserDb) {
      console.error("Utilisateur introuvable dans la base de données");
      return;
    }

    const { name, email, image } = userSignin;

    // On appelle la fonction qui crée un post
    await createPost({
      idUser: findUserDb?.id ?? null,
      name: name ?? null,
      email: email ?? null,
      image: image ?? null,
      value,
    });
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-blue-200 fixed bottom-0 w-full py-10 flex items-center justify-center px-3 flex-col"
    >
      <div className="w-full flex items-center justify-center px-3">
        <input
          value={value}
          onChange={handleChange}
          placeholder="Votre message..."
          type="text"
          className="p-3 w-full outline-none border-none rounded-l-md"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white p-3 flex items-center gap-2 border-none rounded-r-md"
        >
          <IoSend />
          <span>Envoyer</span>
        </button>
      </div>
    </form>
  );
}
