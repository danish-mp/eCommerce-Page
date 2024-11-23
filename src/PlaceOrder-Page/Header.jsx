import React from "react";
import { FiSearch } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { assets } from "../asset/asset";

function Header() {
  return (
    <div>
      <div className="h-14 bg-cyan-300 flex justify-between">
        <div className="flex">
          <h2 className="text-3xl ml-6 flex items-center justify-center font-medium">
            Furniro
          </h2>
        </div>

        <div className="flex gap-20">
          <button>Home</button>
          <button>Shop</button>
          <button>About</button>
          <button>Contact</button>
        </div>

        <div className="w-60 mr-6 flex items-center justify-between">
          <FiSearch />
          <FcLike />
          <FaShoppingCart />
          <CgProfile />
        </div>
      </div>

      <img
        src={assets.HeaderImage}
        alt="Description"
        className="w-full h-96"
      ></img>
    </div>
  );
}

export default Header;
