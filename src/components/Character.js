import React from "react";
import "../components/Character.css";

const Character = ({ character, onZhopa, activeListItem }) => {
  const showCharacter = () => {
    console.log("activeListItem: ", activeListItem);
    if (!activeListItem) {
      return onZhopa(character);
    }
    if (character.id === activeListItem.id) {
      return onZhopa(null);
    }
    return onZhopa(character);
  };

  return (
    <div
      className="container "
      id={character.id}
      onClick={() => showCharacter()}
    >
      <div className="row ">
        <div className="styleCharacter">{character.name}</div>
      </div>
    </div>
  );
};

export default Character;
