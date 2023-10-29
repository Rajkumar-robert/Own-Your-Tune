"use client";

import React, { useState } from "react";
import "./purchase-music-card.scss";

const PurchaseMusicCard = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleshowDetails = () => {
    setShowDetails(true);
  };
  const toggleNotShowDetails = () => {
    setShowDetails(false);
  };

  return (
    <div class="nft">
      <div class="main">
        <img
          class="tokenImage"
          src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="NFT"
        />
        <p className="text-white text-2xl mt-2 font-bold tracking-wider">{props.songName}</p>
        
        <div class="tokenInfo mt-2">
          <div class="price">
            <ins className="ins">◘</ins>
            <p>0.031 ETH</p>
          </div>
          <div class="duration">
            <ins className="ins">◷</ins>
            <p>11 days left</p>
          </div>
        </div>
        <hr id="hr"/>
        <div className="creator pt-2 flex">
          <div class="wrapper">
            <img
              id="img"
              src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
              alt="Creator"
            />
          </div>
          <p className="text-white">
            <ins className="ins X">Composed by</ins> {props.artist}
          </p>

          <button className="px-5 py-2 bg-white rounded-md ml-10">Play</button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseMusicCard;
