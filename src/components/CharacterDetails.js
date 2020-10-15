import React, { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import { useParams } from "react-router-dom";
import classes from "./CharacterDetails.module.css";
import { NavLink } from "react-router-dom";
import Button from "../components/UI/Button/Button";
import Spinner from "./UI/Spinner/Spinner";
import CharacterComics from "./CharacterComics";

const CharacterDetails = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [loading, load] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getDetails();
    // () => unregisterFromActions()
  });

  const renderCharacter = () => {
    return (
      <div className={classes.CharacterWindow}>
        <div>
          <img src={image} />
        </div>
        <div>
          <h3>
            Имя: <span>{name}</span>
          </h3>
          <h4>
            ID: <span>{id}</span>
          </h4>
          <CharacterComics id={id}/>
        </div>
        <div style={{ position: "absolute", bottom: 10, left: 30 }}>
          <NavLink to={"/characters"}>
            <Button type="primary">Назад</Button>
          </NavLink>
        </div>
      </div>
    );
  };

  const getDetails = async () => {
    try {
      const data = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=349e7f8260f2e901f46c4bb2d3de202b&hash=b7d357b46149f83f432b1aee8834d8a3`
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));
      // console.log(data);
      const photo =
        data.data.results[0].thumbnail.path + "/portrait_xlarge.jpg";
      const name = data.data.results[0].name;
      // console.log(photo);
      setImage(photo);
      setName(name);
      //   return (
      //       <div><img src={this.photo}/></div>

      //   )
      //   this.setState({
      //     setCharacter: data.data.results,
      //   });
      load(false);
    } catch (err) {
      console.log("err: ", err);
    }
  };

  return (
    <div className={classes.CharacterDetails}>
      {loading ? <Spinner /> : renderCharacter()}
    </div>
  );
};
export default CharacterDetails;
