"use client";
import React, { useContext, useCallback } from "react";
import SearchBar from "./SearchBar";
import { TransactionContext } from "../context/TransactionContext";

const Toolbar = () => {
  function ellipseAddress(address, width = 4) {
    return `${address?.slice(0, width + 2)}...${address?.slice(-width)}`;
  }

  const { currentAccount, connectWallet } = useContext(TransactionContext);

  const handleConnectWallet = useCallback(() => {
    connectWallet();
  }, [connectWallet]);


  return (
    <div className="flex justify-between items-center h-[100px] w-[1270px]">
      <div className="flex justify-around items-center w-[600px] ">
        <div className="flex gap-[40px]">
          <img className="w-8 h-8" src="/left.png" alt="" />
          <img className="w-8 h-8" src="/right.png" alt="" />
        </div>

        <div className="flex">
          <SearchBar />
        </div>
      </div>

      <div className="flex justify-normal items-center">
        <img src="/menu.png" alt="" className="w-10 h-10 mr-10" />
        <div className="mr-10">
          {currentAccount ? (
            <div className=" cursor-pointer">
              <p className="font-bold tracking-wide">
                {ellipseAddress(currentAccount)}
              </p>
            </div>
          ) : (
            <button onClick={handleConnectWallet}>Connect Wallet</button>
          )}
        </div>

        {/* <img
          src="/stephen.jpg"
          alt=""
          className="w-10 h-10 mr-10 rounded-full object-cover ml-4"
        /> */}
      </div>
    </div>
  );
};

export default Toolbar;
