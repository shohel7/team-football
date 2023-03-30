import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, handleDeleteSinglePlayer, handleDeleteAll }) => {
  const [id] = cart;
  console.log(cart);
  let totalPrice = 0;
  for (const id of cart) {
    totalPrice += id.price;
  }
  const tax = (totalPrice * 10) / 100;
  const grandTotal = totalPrice + tax;

  return (
    <div>
      <div>
        <h6 className="text-xl font-bold text-center mb-5">Player Transfer</h6>
        <span className="space-y-3">
          <p>Selected Player: {cart.length}</p>
          <p>Total Price: ${totalPrice}</p>
          <p>Tax: ${tax}</p>
          <p className="font-bold">Grand Total: ${grandTotal}</p>
        </span>
      </div>
      <div className="my-5">
        {cart.map((name, index) => (
          <div className="my-4" key={index}>
            <div className="bg-indigo-700 text-white py-2 font-bold rounded-lg px-5">
              <span className="flex justify-between items-center">
                <img className="w-8 h-8 rounded-sm" src={name.imgUrl} alt="" />
                <h2>{name.name}</h2>
                <FontAwesomeIcon
                  onClick={() => handleDeleteSinglePlayer(name.id)}
                  icon={faTrash}
                />
              </span>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleDeleteAll}
        className="bg-rose-500 py-2 px-7 rounded-lg text-white font-bold"
      >
        Clear
      </button>
    </div>
  );
};

export default Cart;

{
  /* <span className="bg-indigo-700 text-white py-2 font-bold rounded-lg px-5">
  Shohel Rana
</span>; */
}
