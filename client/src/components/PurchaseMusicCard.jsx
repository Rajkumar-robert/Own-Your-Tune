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
        <img class="tokenImage" src={`../images/${props.imageUrl}`} alt="NFT" />
        <p className="text-white text-2xl mt-2 font-bold tracking-wider">
          {props.songName}
        </p>

        <div>
          <h2 className="text-3xl font-extrabold text-white mt-3">
            {props.title}
          </h2>
        </div>
        <div class="tokenInfo mt-2">
          <div class="price">
            <ins className="ins">◘</ins>
            <p>Price: {props.price} XDC</p>
          </div>
          <div class="duration">
            <ins classNamex="ins">◷</ins>
            <p>3:20</p>
          </div>
        </div>
        <hr id="hr" />
        <div className="creator pt-2 flex">
          <div class="wrapper">
            <img
              id="img"
              src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
              alt="Creator"
            />
          </div>
          <p className="text-white w-[80px]">
            <p>{props.artist}</p>
          </p>

          <button className="px-5 py-2 bg-white rounded-md ml-10">Play</button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseMusicCard;
