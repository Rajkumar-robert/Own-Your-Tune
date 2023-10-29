import React, { useState, useContext } from "react";
import "./music-card.css";
import { Link } from "react-router-dom";
import { TransactionContext } from "../context/TransactionContext";

const MusicCard = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
  );

  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
  } = useContext(TransactionContext);

  const toggleshowDetails = () => {
    setShowDetails(true);
  };
  const toggleNotShowDetails = () => {
    setShowDetails(false);
  };

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    
    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;
    console.log("clicked");
    sendTransaction();
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

            <Input
              placeholder=""
              name="addressTo"
              type="hidden"
              value={props.artistAddress}
              handleChange={handleChange}
            />
            <Input
              placeholder=""
              name="amount"
              type="hidden"
              value={props.songPrice}
              handleChange={handleChange}
            />
            <Input
              placeholder=""
              name="keyword"
              type="hidden"
              value={"hello"}
              handleChange={handleChange}
            />
            <Input
              placeholder=""
              name="message"
              type="hidden"
              value={"Hi"}
              handleChange={handleChange}
            />

            <div className="mt-3">
              <Link to={"/buy"}>
                <div
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                  
                >
                  Buy
                </div>
              </Link>
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
