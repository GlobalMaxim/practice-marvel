import React, { useState, useEffect } from "react";
import classes from "../CharacterList/CharacterList.module.css";
import Character from "../Character/Character";
import Table from "react-bootstrap/Table";
import Spinner from "../UI/Spinner/Spinner";
import Pagination from "../UI/Pagination/Pagination";

import MarvelService from "../../services/MarvelService";

const MarvelClass = new MarvelService();

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(null);
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [currentPage, setPage] = useState(1);

  useEffect(() => {
    getHeroes();
  }, [offset]);

  const handleCurrentPage = (page) => {
    setPage(page);
    setOffset((page - 1) * limit);
  };

  const getHeroes = async () => {
    try {
      setLoading(true);
      const { data } = await MarvelClass.getCharacters(offset);
      if (data) {
        setCharacters(data.results);
        setTotal(data.total);
      }
    } catch (err) {
      console.log("err: ", err);
    } finally {
      setLoading(false);
    }
  };

  const renderCharacters = () =>
    characters?.length ? (
      <div className={classes.body}>
        <div>
          <Pagination
            total={total}
            limit={limit}
            handleCurrentPage={handleCurrentPage}
            currentPage={currentPage}
          />
        </div>
        <Table striped bordered hover style={{ width: "800" }}>
          <tbody style={{ width: "100%", alignItems: "center" }}>
            {characters.map((character, index) => (
              <Character
                character={character}
                key={index}
                id={index}
                offset={offset}
                currentPage={currentPage}
                characters={characters}
              />
            ))}
          </tbody>
        </Table>
      </div>
    ) : null;

  if (loading) {
    return (
      <div style={{ position: "absolute", top: "50%", left: "50%" }}>
        <Spinner />
      </div>
    );
  }

  return <div className={classes.Character}>{renderCharacters()}</div>;
};
export default CharacterList;
