import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import userInfo from "../utile/userInfo";
import createPost from "../utile/createPost";
import { fetchUsers } from "../utile/usersList";
import { fetchPosts } from "../utile/listChat";

type User = {
  name?: string | null;
  email: string | null;
  image?: string | null;
  // createdAt?: string;
  // updatedAt?: string;
};
type SendMessageProps = {
  userSignin: User | null;
};
type Posts = {
  id?: string;
  name?: string;
  email?: string;
  image?: string;
  desc?: string; // createdAt DateTime @default(now())
};

export default function SendMessage({ userSignin }: SendMessageProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  // pour recuperer la value de l'input
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valInput = e.target.value;
    setValue(valInput);
    // console.log(value);
  };

  // pour soumettre le formulaire
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (userSignin) {
      const { name, email, image } = userSignin;
      // On appelle la fonction qui crée un post
      await createPost({
        name: name ?? null,
        email: email ?? null,
        image: image ?? null,
        value,
      });
      setValue("");
    }
  };

  return (
    <>
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
    </>
  );
}
