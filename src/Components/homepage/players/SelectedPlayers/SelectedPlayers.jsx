import React from "react";
import SelectedCard from "../../../ui/SelectedCard";

export default function SelectedPlayers({
  selectedPlayers,
  setSelectedPlayers,
  setCoin,
  coin,
}) {
  const handleDeleteSelectedPlayer = (player) => {
    const filteredPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.playerName != player.playerName,
    );
    setSelectedPlayers(filteredPlayers);
    setCoin(coin + player.price);
  };

  return (
    <div>
      <div className="space-y-4">
        {selectedPlayers.length === 0 ? (
          <div className="h-[300px] flex flex-col gap-4 item-center justify-center text-center">
            <h2 className="font-semibold text-xl">No players selected yet</h2>
            <p>Go to available tab to select players</p>
          </div>
        ) : (
          selectedPlayers.map((player, index) => {
            return (
              <SelectedCard
                key={index}
                player={player}
                handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
