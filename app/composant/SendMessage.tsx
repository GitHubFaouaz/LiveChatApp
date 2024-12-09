import React, { ChangeEvent, FormEvent, useState } from "react";
import { IoSend } from "react-icons/io5";
import userInfo from "../utile/userInfo";
import { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function SendMessage() {
  type post = {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    desc?: string | null;
  };

  const [value, setValue] = useState("");
  const user = userInfo();

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
    try {
      const { name, email, image } = user;
      const newPost = await prisma.post.create({
        data: {
          // title: "Mon titre",
          // image: "https://example.com/image.jpg",
          name: name,
          email: email ?? null,
          image: image,
          desc: value,
        },
      });
    } catch (error) {
      console.log(error);
    }
    setValue("");
  };

  return (
    <div className="bg-blue-200 fixed bottom-0 w-full py-10 flex items-center justify-center px-3 flex-col">
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
    </div>
  );
}
