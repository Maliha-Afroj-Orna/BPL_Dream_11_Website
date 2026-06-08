import React from "react";
import Card from "../../../ui/Card";

export default function AvailablePlayers({ players, setCoin, coin, setSelectedPlayers, selectedPlayers }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((player) => (
          <Card key={player.playerName} player={player} setCoin={setCoin} coin={coin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}  />
        ))}
      </div>
    </>
  );
}
