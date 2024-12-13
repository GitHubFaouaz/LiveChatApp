import React, { useState } from "react";

interface Chat {
  idUser: string;
  name: string;
  email: string;
  image: string;
  desc: string;
  createdAt: Date;
}
// affichage des chats depuis la bd
export default function ChatContainer() {
  const [data, setData] = useState<Chat[]>([]); //Cela signifie que l'état data est un tableau d'objets respectant l'interface chat ([]) : L'état initial est un tableau vide.

  return <div>ChatContainer</div>;
}
