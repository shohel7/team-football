import React from "react";

const Player = ({ player, handleAddToCart }) => {
  const { imgUrl, name, price, position } = player;
  return (
    <div>
      <div className="card w-72 bg-base-100 shadow-2xl p-3">
        <figure>
          <img className="rounded-b-xl" src={imgUrl} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price: ${price} Million</p>
          <p>Position: {position}</p>
          <div className="card-actions">
            <button
              onClick={() => handleAddToCart(player)}
              className="btn btn-primary w-full"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
