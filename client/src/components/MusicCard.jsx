import React, { useState } from "react";
import "./music-card.css";

const MusicCard = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleshowDetails = () => {
    setShowDetails(true);
  };
  const toggleNotShowDetails = () => {
    setShowDetails(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url("../images/${props.imageUrl}")`,
      }}
      onMouseEnter={toggleshowDetails}
      onMouseLeave={toggleNotShowDetails}
      className="flex flex-col  w-[317px] h-[305px] overflow-hidden full-div transition-transform transform-gpu "
    >
      <div
        className="game-details-div
         px-5 w-[321px] border-t-1 h-[321px]  bg-[rgba(0,0,0,0.4)] text-white relative top-[321px] "
      >
        <h2 className="text-3xl font-extrabold text-white mt-3">
          {props.title}
        </h2>

        {showDetails && (
          <div className="text-xl">
            <p>Song Genre: {props.songGenre}</p>
            <p>Song Artist: {props.songArtist}</p>
            <p>Song Price: ${props.songPrice}</p>
            <p>Artist Address: {props.artistAddress}</p>

            <div className="mt-3">
              <button className="bg-blue-500 text-white px-5 py-1 rounded mr-2">
                Buy
              </button>
              <button className="bg-green-500 text-white px-3 py-1 rounded">
                Wishlist
              </button>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MusicCard;
