import React from "react";

const Header = () => {
  return (
    <div className=" bg-rose-500 mb-8">
      <div className="navbar px-24 text-white">
        <div className="flex-1">
          <a className="normal-case text-3xl font-bold">Team-Football</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li>
              <a>Home</a>
            </li>
            <li tabIndex={0}>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
