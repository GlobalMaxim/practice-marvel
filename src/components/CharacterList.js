import React from "react";
import "../components/CharacterList.css";
import Character from "./Character";

const CharacterList = ({ characters }) => {
  const renderCharacters = () =>
    characters && characters.length > 0
      ? characters.map((character) => <Character character={character} />)
      : null;

  return (
    <div className="Character">
      {renderCharacters()}
    </div>
  );
};
export default CharacterList;
