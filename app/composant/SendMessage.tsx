import React from "react";
import { IoSend } from "react-icons/io5";

export default function SendMessage() {
  return (
    <div className="bg-blue-200 fixed bottom-0 w-full py-10 flex items-center justify-center px-3 flex-col">
      SendMessage
      <div className="w-full flex items-center justify-center px-3">
        <input
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
