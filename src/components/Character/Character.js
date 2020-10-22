import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../Character/Character.module.css";
import Button from "../UI/Button/Button";

const Character = ({ character, id, offset, currentPage, characters }) => {
  const [orderNumber, setOrderNumber] = useState(null);
  // const showCharacter = () => {
  //   console.log("activeListItem: ", activeListItem);
  //   if (!activeListItem) {
  //     return onShow(character);
  //   }
  //   if (character.id === activeListItem.id) {
  //     return onShow(null);
  //   }
  //   return onShow(character);
  // };

  const calcOrderNumber = () => {
    const orderNumber = offset > 0 ? offset + id + 1 : id + 1;
    return setOrderNumber(orderNumber);
  };

  useEffect(() => calcOrderNumber(), [characters]);

  return orderNumber ? (
    <div id={character.id}>
      {/* <div className="row ">
        <div className="">
          {id + 1}
          {character.name}
        </div>
      </div> */}

      <td style={{ width: "10%" }}>{orderNumber}</td>
      <td style={{ width: "90%" }}>{character.name}</td>
      <td>
        <NavLink to={"/characters/" + character.id}>
          <Button type="primary">Посмотреть</Button>
        </NavLink>
      </td>
    </div>
  ) : null
};

export default Character;
