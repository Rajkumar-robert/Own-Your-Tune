import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import PurchaseMusicCard from "../components/PurchaseMusicCard";
import Web3 from "web3";

const PurchasedPage = () => {
  
  const [purchasedSongs, setPurchasedSongs] = useState([]); // Array to store purchased songs

  useEffect(() => {
    // Web3.js setup
    const provider = new Web3.providers.HttpProvider("your_provider_url");
    const web3 = new Web3(provider);

    // Load the smart contract ABI and address
    const contractABI = []; // Replace with your smart contract's ABI
    const contractAddress = "0x..."; // Replace with your smart contract's address

    // Create a contract instance
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    // Define a function to retrieve purchased songs
    async function getPurchasedSongs() {
      try {
        // Replace this with your contract's function to get purchased songs
        const purchasedData = await contract.methods.getPurchasedSongs().call();

        // Update the state with the fetched data
        setPurchasedSongs(purchasedData);
      } catch (error) {
        console.error("Error retrieving purchased songs:", error);
      }
    }

    // Call the function to retrieve purchased songs
    getPurchasedSongs();
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  

  return (
    <Layout>
      <div className="flex flex-col relative top-[100px] w-[1300px]">
        <div className="flex justify-between">
          <p className="text-white text-6xl font-extrabold ml-10 mt-10">
            Purchased Songs & Albums
          </p>
        </div>

        <div className="grid grid-cols-3 ">
          {purchasedSongs.map((song, index) => (
            <PurchaseMusicCard
              key={index}
              title={song.songName}
              imageUrl={song.imageUrl} // Assuming your contract returns an image URL
              artist={song.artist}
              songGenre={song.songGenre}
              // Include additional song details as needed
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PurchasedPage;
