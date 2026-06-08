import React, { useState } from "react";
import { FaUser, FaFlag } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Card({ player, setCoin, coin, setSelectedPlayers }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleChoosePlayer = () => {
    let newCoin = coin - player.price;
    if (newCoin >= 0) {
      setCoin(coin - player.price);
    } else {
      toast.error("Not enough coin to purchase this player");
      return;
    }

    toast.success(`${player.playerName} is selected`);
    setIsSelected(true);
    setSelectedPlayers((prev) => [...prev, player]);
  };

  return (
    <div className="card bg-base-100 shadow-lg">
      <figure className="h-80 w-full shadow-sm">
        <img
          className="h-full w-full"
          src={player.playerImg}
          alt={player.playerName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <FaUser /> {player.playerName}
        </h2>
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-2 text-gray-500">
            <FaFlag />
            <p>{player.playerCountry}</p>
          </div>
          <button className="btn">{player.playerType}</button>
        </div>
        <div className="divider"></div>

        <div className="space-y-4">
          <h2 className="font-bold">Rating: {player.rating}</h2>
          <div className="flex justify-between items-center">
            <p className="font-semibold">{player.battingStyle}</p>
            <p className="text-gray-500 text-right">{player.bowlingStyle}</p>
          </div>
        </div>

        <div className="card-actions justify-between items-center">
          <p className="font-semibold">Price: ${player.price}</p>
          <button
            onClick={handleChoosePlayer}
            className="btn"
            disabled={isSelected}
          >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
}
