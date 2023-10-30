import React, { useState } from "react";
import Layout from "./Layout";
import PurchaseMusicCard from "../components/PurchaseMusicCard";
import FileUploadIPFS from "../components/FileUploadIPFS";

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
     title: "Closer",
     imageUrl: "closer.jpeg",
     price: 7,
     artistAddress: "0xeD89087BEc7Df554BFe6EA9867f170E70ccf0697",
     songGenre: "Pop",
     songArtist: "HALSEY ft. Chainsmokers",
   },
   {
     title: "Shape of You",
     imageUrl: "shape.png",
     price: 3,
     artistAddress: "0xeD89087BEc7Df554BFe6EA9867f170E70ccf0697",
     songGenre: "Pop",
     songArtist: "Ed Sheeran",
   },
   {
     title: "Beat it",
     imageUrl: "beatit.jpeg",
     price: 8,
     artistAddress: "0xeD89087BEc7Df554BFe6EA9867f170E70ccf0697",
     songGenre: "Pop",
     songArtist: "Michael Jackson",
   },
   {
     title: "Born To Die",
     imageUrl: "borntodie.jpeg",
     price: 7,
     artistAddress: "0xeD89087BEc7Df554BFe6EA9867f170E70ccf0697",
     songGenre: "Pop",
     songArtist: "Lana Del Rey",
   },
   {
     title: "Meat Loaf",
     imageUrl: "meatloaf.jpeg",
     price: 7,
     artistAddress: "0xeD89087BEc7Df554BFe6EA9867f170E70ccf0697",
     songGenre: "Rock",
     songArtist: "Meat Loaf",
   },
   {
     title: "Paradise",
     imageUrl: "paradise.jpeg",
     price: 7,
     artistAddress: "0xeD89087BEc7Df554BFe6EA9867f170E70ccf0697",
     songGenre: "Pop",
     songArtist: "Coldplay",
   },
   {
     title: "Dark Horse",
     imageUrl: "perry.jpeg",
     price: 7,
     artistAddress: "0xeD89087BEc7Df554BFe6EA9867f170E70ccf0697",
     songGenre: "Pop",
     songArtist: "Katy Perry",
   },
   {
     title: "Rebirth",
     imageUrl: "rebirth.jpeg",
     price: 5,
     artistAddress: "0xeD89087BEc7Df554BFe6EA9867f170E70ccf0697",
     songGenre: "Rock",
     songArtist: "Red Hot Chili Peppers",
   },
   {
     title: "Starboy",
     imageUrl: "starboy.jpeg",
     price: 6,
     artistAddress: "0xeD89087BEc7Df554BFe6EA9867f170E70ccf0697",
     songGenre: "R&B",
     songArtist: "The Weeknd",
   },
   {
     title: "1989",
     imageUrl: "taylor.jpeg",
     price: 4,
     artistAddress: "0xeD89087BEc7Df554BFe6EA9867f170E70ccf0697",
     songGenre: "Pop",
     songArtist: "Taylor Swift",
   },
   {
     title: "Youth",
     imageUrl: "youth.jpeg",
     price: 3,
     artistAddress: "0xeD89087BEc7Df554BFe6EA9867f170E70ccf0697",
     songGenre: "Pop",
     songArtist: "Troye Sivan",
   },
   {
     title: "Despacito",
     imageUrl: "desp.jpeg",
     price: 5,
     artistAddress: "0xeD89087BEc7Df554BFe6EA9867f170E70ccf0697",
     songGenre: "Reggaeton",
     songArtist: "Luis Fonsi ft. Daddy Yankee",
   },
 ];


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
        <div className="flex justify between items-center">
          <p className="text-white text-6xl font-extrabold ml-10 mt-10">
            Purchased Songs & Albums
          </p>
          <button
            className="px-3 py-2 text-white mt-10 ml-8 text-xl border"
            onClick={handleOpenPopup}
          >
            Publish Song
          </button>
        </div>

        <div className="grid grid-cols-3">
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
                handleChange={handleInputChange}
              />
            </label>
            <label className="block mb-2">
              Song Genre:
              <Input
                type="text"
                name="songGenre"
                value={formData.songGenre}
                handleChange={handleInputChange}
              />
            </label>
            <label className="block mb-2">
              Artist:
              <Input
                type="text"
                name="artist"
                value={formData.artist}
                handleChange={handleInputChange}
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
                className="bg-red-500 text-white px-4 py-2 rounded-md hover-bg-red-600"
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
