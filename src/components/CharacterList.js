import React, { useState } from "react";
import "../components/CharacterList.css";
import Character from "./Character";
import Table from "react-bootstrap/Table";

const CharacterList = ({ characters }) => {
  const [activeListItem, setActiveListItem] = useState(null);

  const renderCharacters = () =>
    characters && characters.length > 0 ? (
      <div className="body">
        <Table striped bordered hover style={{ width: "800" }}>
          <tbody style={{width: "100%", alignItems:'center'}}>
            {characters.map((character, index) => (
              <Character
                onShow={setActiveListItem}
                character={character}
                activeListItem={activeListItem}
                key={index}
                id={index}
              />
            ))}
          </tbody>
        </Table>

        {/* {activeListItem ? (
          <div className="windowStyle">
            {activeListItem ? (
              <div style={{ color: "black" }}>
                <div>
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
        ) : null} */}
      </div>
    ) : null;

  return <div className="Character">{renderCharacters()}</div>;
};
export default CharacterList;
