import React from "react"
import  '../components/Character.css'

const Character = (props) => {
    const { id, name } = props.character;
    const showCharacter = (name) => {
      console.log("character: ", name);
    };
  
    return (
      <div onClick={() => showCharacter(name)} key={id} className="Character">
        {name}
        {/* <Character idCharacter={this.id} nameCharacter={this.name}/> */}
      </div>
    );
  };
export default Character