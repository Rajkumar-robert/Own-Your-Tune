import React from "react";
import { useState } from "react";
import Layout from "./Layout";
import PurchaseMusicCard from "../components/PurchaseMusicCard";
import FileUploadIPFS from "../components/FileUploadIPFS";

const musicData = [
  {
    title: "HALSEY ft. Chainsmokers",
    imageUrl: "closer.jpeg",
  },
  {
    title: "Shape of You ft. Ed Sheeran",
    imageUrl: "shape.png",
  },
  {
    title: "Shape of You ft. Ed Sheeran",
    imageUrl: "beatit.jpeg",
  },
  {
    title: "Shape of You ft. Ed Sheeran",
    imageUrl: "borntodie.jpeg",
  },
  {
    title: "Shape of You ft. Ed Sheeran",
    imageUrl: "meatloaf.jpeg",
  },
  {
    title: "Shape of You ft. Ed Sheeran",
    imageUrl: "paradise.jpeg",
  },
  {
    title: "Shape of You ft. Ed Sheeran",
    imageUrl: "perry.jpeg",
  },
  {
    title: "Shape of You ft. Ed Sheeran",
    imageUrl: "rebirth.jpeg",
  },
  {
    title: "Shape of You ft. Ed Sheeran",
    imageUrl: "starboy.jpeg",
  },
  {
    title: "Shape of You ft. Ed Sheeran",
    imageUrl: "taylor.jpeg",
  },
  {
    title: "Shape of You ft. Ed Sheeran",
    imageUrl: "youth.jpeg",
  },
  {
    title: "Shape of You ft. Ed Sheeran",
    imageUrl: "desp.jpeg",
  },
];

const UploadPage = () => {
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

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    songName: "",
    songGenre: "",
    artist: "",
  });

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePublishSong = () => {
    // Handle publishing the song here.
    console.log("Song data:", formData);
    handleClosePopup();
  };

  return (
    <Layout>
      <div className="flex flex-col relative top-[100px] w-[1300px]">
        <div className="flex justify-between">
          <p className="text-white text-6xl font-extrabold ml-10 mt-10">
            Purchased Songs & Albums
          </p>
          <button
            className="px-3 py-2 text-white mr-10"
            onClick={handleOpenPopup}
          >
            Publish Song
          </button>
        </div>

        <div className="grid grid-cols-3 ">
          {musicData.map((music, index) => (
            <PurchaseMusicCard
              key={index}
              title={music.title}
              imageUrl={music.imageUrl}
            />
          ))}
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-md p-4 w-96">
            <h2 className="text-2xl font-bold mb-4">Publish Song</h2>
            <FileUploadIPFS />
            <label className="block mb-2">
              Song Name:
              <input
                type="text"
                name="songName"
                value={formData.songName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </label>
            <label className="block mb-2">
              Song Genre:
              <input
                type="text"
                name="songGenre"
                value={formData.songGenre}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </label>
            <label className="block mb-2">
              Artist:
              <input
                type="text"
                name="artist"
                value={formData.artist}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </label>
            <div className="flex justify-end">
              <button
                onClick={handlePublishSong}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2"
              >
                Publish
              </button>
              <button
                onClick={handleClosePopup}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default UploadPage;