import React from "react";

export default class MarvelService {
  
  async getCharacters(offset) {
    try {
      const data = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters?offset=${offset}&ts=1&apikey=349e7f8260f2e901f46c4bb2d3de202b&hash=b7d357b46149f83f432b1aee8834d8a3`
      ).then((res) => res.json());
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  async getComics(value) {
    try {
      const data = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters/${value}/comics?ts=1&apikey=349e7f8260f2e901f46c4bb2d3de202b&hash=b7d357b46149f83f432b1aee8834d8a3`
      ).then((res) => res.json());
      return data;
    } catch (err) {
      console.log(err);
    }
  }
}
