// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol"; 

contract UserStateContract {
    struct Song {
        uint256 songPrice;
        string songName;
        string songGenre;
        string artist;
        string ipfsHash;
    }

    struct UserState {
        string userId;
        mapping(string => Song) songDetails;
        string[] purchasedSongs;
        string[] favoriteSongs;
        string[] wishList;
        string[] publishedSongs;
    }

    mapping(address => UserState) public userStates;

    function setUserState(
        string memory _userId
    ) public {
        userStates[msg.sender].userId = _userId;
    }

    function addPurchasedSong(
        string memory songId
    ) public {
        UserState storage user = userStates[msg.sender];
        user.purchasedSongs.push(songId);   
    }

    function addFavoriteSong(
        string memory songId
    ) public {
        UserState storage user = userStates[msg.sender];
        user.favoriteSongs.push(songId);
    }

    function addWishListSong(
        string memory songId
    ) public {
        UserState storage user = userStates[msg.sender];
        user.wishList.push(songId);
    }

    function addPublishedSong(
        string memory songId
    ) public {
        UserState storage user = userStates[msg.sender];
        user.publishedSongs.push(songId);
    }

    function addSongDetails(
        string memory songId,
        uint256 songPrice,
        string memory songName,
        string memory songGenre,
        string memory artist,
        string memory ipfsHash
    ) public {
        UserState storage user = userStates[msg.sender];
        user.songDetails[songId] = Song({
            songPrice: songPrice,
            songName: songName,
            songGenre: songGenre,
            artist: artist,
            ipfsHash: ipfsHash
        });
    }

    function getUserState() public view returns (string memory) {
        return userStates[msg.sender].userId;
    }

    function getUserStatePurchasedSongs() public view returns (Song[] memory) {
        UserState storage user = userStates[msg.sender];
        string[] memory purchasedSongs = user.purchasedSongs;
        Song[] memory songDetails = new Song[](purchasedSongs.length);

        for (uint256 i = 0; i < purchasedSongs.length; i++) {
            songDetails[i] = user.songDetails[purchasedSongs[i]];
        }

        return songDetails;
    }

    function getUserStateFavoriteSongs() public view returns (Song[] memory) {
        UserState storage user = userStates[msg.sender];
        string[] memory favoriteSongs = user.favoriteSongs;
        Song[] memory songDetails = new Song[](favoriteSongs.length);

        for (uint256 i = 0; i < favoriteSongs.length; i++) {
            songDetails[i] = user.songDetails[favoriteSongs[i]];
        }

        return songDetails;
    }

    function getUserStateWishList() public view returns (Song[] memory) {
        UserState storage user = userStates[msg.sender];
        string[] memory wishList = user.wishList;
        Song[] memory songDetails = new Song[](wishList.length);

        for (uint256 i = 0; i < wishList.length; i++) {
            songDetails[i] = user.songDetails[wishList[i]];
        }

        return songDetails;
    }

    function getUserStatePublishedSongs() public view returns (Song[] memory) {
        UserState storage user = userStates[msg.sender];
        string[] memory publishedSongs = user.publishedSongs;
        Song[] memory songDetails = new Song[](publishedSongs.length);

        for (uint256 i = 0; i < publishedSongs.length; i++) {
            songDetails[i] = user.songDetails[publishedSongs[i]];
        }

        return songDetails;
    }

    function getSongDetails(string memory songId) public view returns (Song memory) {
        return userStates[msg.sender].songDetails[songId];
    }
}