"use client";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col h-[100vh] w-[250px] bg-gradient-to-b from-[#766A62] via-[#514D51] to-[#313D49] bg-opacity-60 backdrop-filter backdrop-blur-lg shadow-md px-4 text-white">
      <div className="mb-4 flex flex-col justify-center items-center mt-10">
        <img
          src="../images/logo.png"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover"
        />
        <p className="mt-3 text-3xl font-bold">Own Your Tune</p>
      </div>

      <div className="flex flex-col gap-[10px]">
        <MenuItem
          icon="https://img.icons8.com/metro/26/ffffff/compass.png"
          text="Explore"
          navtext="explore"
        />
        <MenuItem
          icon="https://img.icons8.com/metro/26/ffffff/buy.png"
          text="Purchased Songs"
          navtext="purchases"
        />
        <MenuItem
          icon="https://img.icons8.com/metro/26/ffffff/plus.png"
          text="WishList"
          navtext="wishlist"
        />
        <MenuItem
          icon="https://img.icons8.com/metro/26/ffffff/musical.png"
          text="Published Songs"
          navtext="publishes"
        />
      </div>

      <div className="mt-10 ">
        <MenuItem
          icon="https://img.icons8.com/metro/26/ffffff/like.png"
          text="Favorites"
        />
        <MenuItem
          icon="https://img.icons8.com/metro/26/ffffff/download.png"
          text="Downloads"
        />
        <MenuItem
          icon="https://img.icons8.com/metro/26/ffffff/time.png"
          text="History"
        />
      </div>
    </div>
  );
};

const MenuItem = ({ icon, text, navtext }) => {
  return (
    <Link to={`/${navtext}`}>
      <div className="flex items-center gap-[15px] menu-item px-5 py-3 rounded-md cursor-pointer">
        <img src={icon} alt={text} className="w-[17px] h-[17px]" />
        <p className="text-base">{text}</p>
      </div>
    </Link>
  );
};

export default Navbar;
