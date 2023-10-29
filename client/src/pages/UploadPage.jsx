import React from "react";
import { useState } from "react";
import Layout from "./Layout";
import PurchaseMusicCard from "../components/PurchaseMusicCard";
import FileUploadIPFS from "../components/FileUploadIPFS";
import { TransactionContext } from "../context/TransactionContext";
import { UserStateContext } from "../context/UserStateContext";


  
const Input = ({ type, value, handleChange }) => (
  <input
    type={type}
    step="0.0001"
    value={value}
    onChange={handleChange}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const UploadPage = () => {

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
];const UploadPage = () => {
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
              <Input
                type="text"
                name="songName"
                value={formData.songName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </label>
            <label className="block mb-2">
              Song Genre:
              <Input
                type="text"
                name="songGenre"
                value={formData.songGenre}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </label>
            <label className="block mb-2">
              Artist:
              <Input
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