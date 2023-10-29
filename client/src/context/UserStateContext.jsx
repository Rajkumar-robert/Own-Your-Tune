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
  const [formValue, setformValue] = useState({ userId: "", addressTo: "", amount: "", keyword: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [purchasedSongs, setPurchasedSongs] = useState([]);
  const [favoriteSongs, setFavoriteSongs] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [publishedSongs, setPublishedSongs] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const handleChange = (e, userid) => {
    setformValue((prevState) => ({ ...prevState, [userid]: e.target.value }));
  };


  const setUserState = async () => {
    try {
        if (ethereum) {
            const userStateContract = createUserStateContract();
            const structuredTransactions = availableTransactions.map((transaction) => ({
              userId: transaction._userId,
              
            }));
    
            const { userId } = formValue; // Assuming userId is obtained from your form or some other source
            const result = await userStateContract.setUserState(userId); // Pass userId as an argument
            console.log(structuredTransactions);

            setTransactions(structuredTransactions);
        } else {
            console.log("Ethereum is not present");
        }
    } catch (error) {
        console.log(error);
    }
};

  // You can add similar functions to fetch other user state data (purchasedSongs, favoriteSongs, wishList, publishedSongs).

  useEffect(() => {
    setUserState();
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
        setUserState,
        handleChange,
        formValue
        // Add other state variables here as needed
      }}
    >
      {children}
    </UserStateContext.Provider>
  );
};
