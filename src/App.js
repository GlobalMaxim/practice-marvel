import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CharacterList from "./components/CharacterList";
import { Redirect, Route, Switch } from "react-router-dom";
import CharacterDetails from "./components/CharacterDetails";
import Spinner from "./components/UI/Spinner/Spinner";

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
      loading: true,
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
        // "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=4247b383b33c327bf8f34f063ea12f11&hash=63f587732d01d61230c20ed1789341a2"
        "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=349e7f8260f2e901f46c4bb2d3de202b&hash=b7d357b46149f83f432b1aee8834d8a3"
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));
      // console.log(data);
      this.setState({
        characters: data.data.results,
        loading: false,
      });
    } catch (err) {
      console.log("err: ", err);
    }
  };

  render() {
    const { characters } = this.state;

    return (
      <Switch>
        <div>
          <Redirect from="/" to="/characters" />
          <Route
            exact
            path="/characters"
            render={() => <CharacterList characters={characters} isLoaded={this.state.loading} />}
          />

          {/* <CharacterList characters={characters} /> */}
          <Route path="/characters/:id" component={CharacterDetails} />
        </div>
      </Switch>
    );
  }
}

export default App;
