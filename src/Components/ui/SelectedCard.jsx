import React from "react";
import { MdDelete } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

export default function SelectedCard({ player, handleDeleteSelectedPlayer }) {
  return (
    <div className="flex items-center gap-6 justify-between p-5 rounded-2xl border">
      <div className="flex items-center gap-6">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-[75px] w-auto rounded-md"
        />
        <div>
          <h2 className="flex items-center gap-2 font-semibold text-xl">
            <FaRegUser />
            {player.playerName}
          </h2>
          <p>{player.playerType}</p>
        </div>
      </div>
      <button
        className="btn text-red-500"
        onClick={() => handleDeleteSelectedPlayer(player)}
      >
        <MdDelete />
      </button>
    </div>
  );
}
