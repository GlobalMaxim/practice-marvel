import React, { useEffect, useState } from "react";
import Spinner from "./UI/Spinner/Spinner";

const CharacterComics = (props) => {
  const [comics, setComics] = useState([]);

  const getComics = async () => {
    try {
      const { data } = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters/${props.id}/comics?ts=1&apikey=349e7f8260f2e901f46c4bb2d3de202b&hash=b7d357b46149f83f432b1aee8834d8a3`
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));
      setComics(data.results);
      console.log("comics:", data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const renderComics = () => {
    return (
      <div>
        <h3>Список комиксов:</h3>
        {comics && comics.length > 0 ? (
          comics.map((comics, index) => (
            <p style={{ fontSize: "16", margin: 0, padding: 0 }}>
              {/* <span style={{padding: 0, margin: 0, fontWeight: 'bold'}}>{index + 1}: </span> */}
              {comics.diamondCode}
            </p>
          ))
        ) : (
          <Spinner />
        )}
      </div>
    );
  };

  useEffect(() => {
    getComics();
  }, []);

  return <div>{renderComics()}</div>;
};

export default CharacterComics;
