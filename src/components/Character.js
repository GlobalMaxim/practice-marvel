import React from "react";
import { NavLink } from "react-router-dom";
import "../components/Character.css";
import Button from "../components/UI/Button/Button";



const Character = ({ character, onShow, activeListItem, id }) => {
  const showCharacter = () => {
    console.log("activeListItem: ", activeListItem);
    if (!activeListItem) {
      return onShow(character);
    }
    if (character.id === activeListItem.id) {
      return onShow(null);
    }
    return onShow(character);
  };

  return (
    <div id={character.id} onClick={() => showCharacter()}>
      {/* <div className="row ">
        <div className="">
          {id + 1}
          {character.name}
        </div>
      </div> */}

      <td style={{ width: "10%" }}>{id + 1}</td>
      <td style={{ width: "90%" }}>{character.name}</td>
      <td>
        <NavLink to={"/characters/" + character.id}>
          <Button type="primary">
            Посмотреть
          </Button>
        </NavLink>
      </td>
    </div>
  );
};

export default Character;
