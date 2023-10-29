
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
         px-5 w-[321px] border-t-1 h-[321px]  bg-[rgba(255,255,255,0.4)] relative top-[321px] "
      >
        <h2 className="text-3xl font-extrabold text-black mt-3">
          {props.title}
        </h2>
      </div>
    </div>
  );
};

export default MusicCard;
