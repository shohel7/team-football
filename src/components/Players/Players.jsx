import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
  removeFromDb,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Player from "../Player/Player";
import { toast } from "react-toastify";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    let savedCart = [];
    console.log(storedCart);
    for (const id in storedCart) {
      const addedPlayer = players.find((ply) => ply.id === id);
      // console.log(addedPlayer);

      if (addedPlayer) {
        const quantity = storedCart[id];
        addedPlayer.quantity = quantity;
        // console.log(addedPlayer);
        savedCart.push(addedPlayer);
      }
    }
    setCarts(savedCart);
  }, [players]);

  const handleAddToCart = (player) => {
    const isExit = carts.find((id) => id.id === player.id);
    if (!isExit) {
      const newCart = [...carts, player];
      setCarts(newCart);
      addToDb(player.id);
    } else {
      toast("Already added Player !!");
    }
  };

  const handleDeleteAll = () => {
    deleteShoppingCart();
    setCarts([]);
  };

  const handleDeleteSinglePlayer = (deleteId) => {
    // console.log(deleteId);
    removeFromDb(deleteId);
    const setPlayer = carts.filter((crt) => crt.id !== deleteId);
    setCarts(setPlayer);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-9">
      <div className="col-span-7 pl-24 grid grid-cols-1 md:grid-cols-3 gap-x-0 gap-5">
        {players.map((player) => (
          <Player
            player={player}
            handleAddToCart={handleAddToCart}
            key={player.id}
          />
        ))}
      </div>
      <div className="col-span-2 bg-rose-300 p-8">
        <Cart
          cart={carts}
          handleDeleteSinglePlayer={handleDeleteSinglePlayer}
          handleDeleteAll={handleDeleteAll}
        />
      </div>
    </div>
  );
};

export default Players;
