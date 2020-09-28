import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CharacterList from "./components/CharacterList";

// const API_KEY = ""

// const Character = ({ character }) => {
//   const { id, name } = character;
//   const showCharacter = (character) => {
//     console.log("character: ", character);
//   };

//   return (
//     <div onClick={() => showCharacter(character)} key={id}>
//       {name}
//     </div>
//   );
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: null,
    };
  }

  componentDidMount() {
    this.gettingHeroes();
  }

  gettingHeroes = async () => {
    try {
      const data = await fetch(
        //"http://gateway.marvel.com/v1/public/comics?ts=1&apikey=4247b383b33c327bf8f34f063ea12f11&hash=63f587732d01d61230c20ed1789341a2"
        //"https://gateway.marvel.com/v1/public/characters?apikey=4247b383b33c327bf8f34f063ea12f11"
        "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=4247b383b33c327bf8f34f063ea12f11&hash=63f587732d01d61230c20ed1789341a2"
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));
      console.log(data);
      this.setState({
        characters: data.data.results,
      });
    } catch (err) {
      console.log("err: ", err);
    }
  };

  render() {
    const { characters } = this.state;

    return (
      <div>
        <CharacterList characters={characters} />
      </div>
    );
  }
}

export default App;
