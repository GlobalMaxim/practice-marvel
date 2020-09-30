import React, { useState } from "react";
import "../components/CharacterList.css";
import Character from "./Character";

const CharacterList = ({ characters }) => {
  const [activeListItem, setActiveListItem] = useState(null);

  const renderCharacters = () =>
    characters && characters.length > 0 ? (
      <div className="body">
        <div className="listStyle">
          {characters.map((character) => (
            <Character
              onZhopa={setActiveListItem}
              character={character}
              activeListItem={activeListItem}
            />
          ))}
        </div>

        {activeListItem ? (
          <div className="windowStyle">
            {activeListItem ? (
              <div style={{color: 'black'}}>
                <div >
                  <h3>ID персонажа: </h3>
                  {activeListItem.id}
                </div>
                <div>
                  <h3>Имя персонажа:</h3>
                  {activeListItem.name}
                </div>
              </div>
            ) : null}
          </div>
        ) : (
          <div style={{ flex: 7 }}></div>
        )}
      </div>
    ) : null;

  return <div className="Character">{renderCharacters()}</div>;
};
export default CharacterList;
