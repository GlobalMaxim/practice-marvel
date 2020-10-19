import React, { useEffect, useState } from "react";
import Spinner from "../UI/Spinner/Spinner";
import MarvelService from "../../services/MarvelService";

const CharacterComics = (props) => {
  const [comics, setComics] = useState([]);

  const gettingComics = async () => {
    const MarvelClass = new MarvelService();
    try {
      const {data} = await MarvelClass.getComics(props.id);
      setComics(data.results);
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
            <p style={{ fontSize: "16", margin: 0, padding: 0 }} key={index}>
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
    gettingComics();
  }, []);

  return <div>{renderComics()}</div>;
};

export default CharacterComics;
