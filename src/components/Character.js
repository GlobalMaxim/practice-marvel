import React, { useState } from "react";
import classes from "../components/Character.module.css";

const Character = ({ character }) => {
  const [isCharacterVisible, setCharacterVisibility] = useState(false);

  const blockStyle = {
    display: "none",
  };

  const showCharacter = () => {
    console.log(classes);
    setCharacterVisibility(!isCharacterVisible);
  };

  return (
    <div
      className="container"
      id={character.id}
      onClick={() => showCharacter()}
    >
      <div className="row">
        <div className="col-4">
          {character.name}
          {character.id}
        </div>
        {isCharacterVisible ? (
          <div className="col-8">
            <div className={classes.inner}>{character.modified}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Character;
