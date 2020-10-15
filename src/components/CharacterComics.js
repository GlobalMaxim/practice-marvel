import React, { useEffect, useState } from "react";

const CharacterComics = (props) => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    getComics();
  }, [comics]);

  const getComics = async () => {
    try {
      const data = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters/${props.id}/comics?ts=1&apikey=349e7f8260f2e901f46c4bb2d3de202b&hash=b7d357b46149f83f432b1aee8834d8a`
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));
      setComics(data.data.results);
      console.log("comics:", data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderComics = () => {
    comics.map((comics, index) => {
      console.log();
      return (
        <div>
          <h2>{comics.diamondCode}</h2>
        </div>
      );
    });
    return;
  };

  return <div>{renderComics()}</div>;
};

export default CharacterComics;
