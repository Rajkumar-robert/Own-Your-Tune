// UserStateContext.jsx

import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { userStateContractABI, userStateContractAddress } from "../utils/constants";

export const UserStateContext = React.createContext();

const { ethereum } = window;

const createUserStateContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const userStateContract = new ethers.Contract(userStateContractAddress, userStateContractABI, signer);

  return userStateContract;
};

export const UserStateProvider = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [purchasedSongs, setPurchasedSongs] = useState([]);
  const [favoriteSongs, setFavoriteSongs] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [publishedSongs, setPublishedSongs] = useState([]);

  const getUserState = async () => {
    try {
      if (ethereum) {
        const userStateContract = createUserStateContract();
        const result = await userStateContract.getUserState();

        setUserId(result);
        console.log(result);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setUserState = async () => {
    try {
      if (ethereum) {
        const userStateContract = createUserStateContract();
        const result = await userStateContract.setUserState("user1");
        console.log(result);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // You can add similar functions to fetch other user state data (purchasedSongs, favoriteSongs, wishList, publishedSongs).

  useEffect(() => {
    getUserState();
    // Call other functions to fetch additional user state data here
  }, []);

  return (
    <UserStateContext.Provider
      value={{
        userId,
        purchasedSongs,
        favoriteSongs,
        wishList,
        publishedSongs,
        getUserState,
        setUserState,
        // Add other state variables here as needed
      }}
    >
      {children}
    </UserStateContext.Provider>
  );
};
