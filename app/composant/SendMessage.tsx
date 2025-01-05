import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import userInfo from "../utile/userInfo";
import createPost from "../utile/createPost";
import { fetchUsers } from "../utile/usersList";
import { fetchPosts } from "../utile/listChat";

type User = {
  name?: string;
  email: string;
  image?: string;
  // createdAt?: string;
  // updatedAt?: string;
};

type Posts = {
  id: string;
  name: string;
  email: string;
  image: string;
  desc: string; // createdAt DateTime @default(now())
};
export default function SendMessage() {
  const [value, setValue] = useState("");
  const userSignin = userInfo();
  const [usersListDB, setUsersListDb] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [listPosts, setListPosts] = useState<Posts[]>([]);
  // recuperation de tous les users de la DB
  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setUsersListDb(data);
        console.log(data + "data");
      })

      .catch((error) => setError((error as Error).message));
  }, []);

  useEffect(() => {
    fetchPosts()
      .then(setListPosts)
      .catch((error) => setError((error as Error).message));
  }, []);

  if (!userSignin) {
    console.error("Utilisateur non connecté");
    return;
  }

  // console.log("listPosts" + JSON.stringify(listPosts));
  console.log("listPosts", JSON.stringify(listPosts, null, 2));

  // pour recuperer la value de l'input
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valInput = e.target.value;
    setValue(valInput);
    // console.log(value);
  };

  // console.log("liste users dans la DB", usersList);

  // on verifie si lutilisateur connecté est dans la base de donnée
  const findUserDb = usersListDB.find(
    (user) => user.email === userSignin.email
  );
  // console.log("findUserDb", findUserDb);

  // pour soumettre le formulaire
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!findUserDb) {
      console.error("Utilisateur n'est pas autorisé a poster");
      return;
    }

    const { name, email, image } = userSignin;

    // On appelle la fonction qui crée un post
    await createPost({
      name: name ?? null,
      email: email ?? null,
      image: image ?? null,
      value,
    });
    setValue("");
  };

  return (
    <>
      {userSignin ? (
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
      ) : (
        <p>
          Utilisateur non connecté. <a href="/login">Connectez-vous ici</a>
        </p>
      )}
    </>
  );
}
