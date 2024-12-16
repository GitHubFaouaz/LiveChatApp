import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import userInfo from "../utile/userInfo";
import createPost from "../utile/createPost";
import { fetchUsers } from "../utile/usersList";

type User = {
  name?: string;
  email: string;
  image?: string;
};

export default function SendMessage() {
  const [value, setValue] = useState("");
  const user = userInfo();
  const [usersList, setUsersList] = useState([]);
  const [error, setError] = useState<string | null>(null);

  // recuperation de tous les users de la DB
  useEffect(() => {
    fetchUsers()
      .then(setUsersList)
      .catch((error) => setError((error as Error).message));
  }, []);

  console.log("usersList sendMessage", usersList);
  usersList.map((user) => console.log(user));

  // pour recuperer la value de l'input
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valInput = e.target.value;
    setValue(valInput);
    console.log(value);
  };

  // pour soumettre le formulaire
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!user) {
      console.error("Utilisateur non défini");
      return;
    }

    const { name, email, image } = user;

    // On appelle la fonction qui crée un post
    await createPost({
      // idUser: name ?? null,
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
