import React, { useState } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList/CharacterListPage";
import { Redirect, Route, Switch } from "react-router-dom";
import CharacterDetails from "./components/CharacterDetails/CharacterDetails";
import CharactersListPage from './components/CharacterList/CharacterListPage'
import Spinner from "./components/UI/Spinner/Spinner";
import MarvelService from "./services/MarvelService.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: null,
      loading: true,
      total: null,
      count: null,
      limit: null,
      offset: 0,
      currentPage: 1,
    };
  }

  // componentDidMount() {
  //   this.getHeroes();
  // }
  
  // getHeroes = async () => {
  //   const MarvelClass = new MarvelService();
  //   try {
  //     const data = await MarvelClass.getCharacters(20);

  //     console.log(data);
  //     this.setState({
  //       characters: data.data.results,
  //       total: data.data.total,
  //       limit: data.data.limit,
  //       offset: data.data.offset,
  //       loading: false,
  //     });
  //     console.log(this.state.total);
  //     console.log(this.state.count);
  //     console.log(this.state.limit);
  //   } catch (err) {
  //     console.log("err: ", err);
  //   }
  // };

  render() {
    const { total, limit } = this.state;
    const { characters } = this.state;
    const pagesCount = Math.ceil(total / limit);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    console.log(pages);

    return (
      <Switch>
        <div>
          <Route exact path="/characters/:id" component={CharacterDetails} />
          <Route exact path="/characters?page=page" component={CharactersListPage}/>
          <Route
            exact
            path={["/", "/characters"]}
            render={() => (
              <CharacterList
                // currentPage={this.state.currentPage}
                // pages={pages}
                // characters={characters}
                // isLoaded={this.state.loading}
              />
            )}
          />
        </div>
      </Switch>
    );
  }
}

export default App;
