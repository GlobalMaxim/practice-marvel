import React, { useState } from "react";
import classes from "../CharacterList/CharacterList.module.css";
import Character from "../Character/Character";
import Table from "react-bootstrap/Table";
import Spinner from "../UI/Spinner/Spinner";

const CharacterList = ({ characters, isLoaded, pages, currentPage }) => {
  const [activeListItem, setActiveListItem] = useState(null);

  const renderCharacters = () =>
    characters && characters.length > 0 ? (
      <div className={classes.body}>
        <div>
          {pages.map((p) => {
            return (
              <span className={currentPage === p && classes.activeClass}>
                {p}
              </span>
            );
          })}
        </div>
        <Table striped bordered hover style={{ width: "800" }}>
          <tbody style={{ width: "100%", alignItems: "center" }}>
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

  return (
    <div className={classes.Character}>
      {isLoaded ? (
        <div style={{ position: "absolute", top: "50%", left: "50%" }}>
          <Spinner />
        </div>
      ) : (
        renderCharacters()
      )}
    </div>
  );
};
export default CharacterList;
