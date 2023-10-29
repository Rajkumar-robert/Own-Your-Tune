import React from "react";
import Layout from "./Layout";
import MusicCard from "../components/MusicCard";

const musicData = [
  {
    title: "HALSEY ft. Chainsmokers",
    imageUrl: "closer.jpeg",
    price: 7,
    artistAddress: "0xeD89087BEc7Df554BFe6EA9867f170E70ccf0697",
  },
  {
    title: "Shape of You ft. Ed Sheeran",
    imageUrl: "shape.png",
    price: 3,
  },
  {
    title: "Shape of You ft. Ed Sheeran",
    imageUrl: "beatit.jpeg",
    price: 8,
  },
  {
    title: "Shape of You ft. Ed Sheeran",
    imageUrl: "borntodie.jpeg",
    price: 7,
  },
  {
    title: "Shape of You ft. Ed Sheeran",
    imageUrl: "meatloaf.jpeg",
    price: 7,
  },
  {
    title: "Shape of You ft. Ed Sheeran",
    imageUrl: "paradise.jpeg",
    price: 7,
  },
  {
    title: "Shape of You ft. Ed Sheeran",
    imageUrl: "perry.jpeg",
    price: 7,
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

const ExplorePage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-4 relative top-[100px]">
        {musicData.map((music, index) => (
          <MusicCard
            key={index}
            title={music.title}
            imageUrl={music.imageUrl}
            songPrice ={music.price}
            artistAddress = {music.artistAddress}
          />
        ))}
      </div>
    </Layout>
  );
};

export default ExplorePage;
