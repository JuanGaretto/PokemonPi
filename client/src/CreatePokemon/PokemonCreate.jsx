import React from "react";
import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import {useHistory} from "react-router-dom"
import { getType, postPokemon } from "../store/actions/index.js";
import { Link } from "react-router-dom";
import "./PokemonCreate.css";

function validate(pokemon){
  let errors = {};
  if (!pokemon.name){
    errors.name = "A name is required"
  } return errors
}

export default function PokemonCreate() {
  const dispatch = useDispatch();
  const history = useHistory();
 

  const [errors,setErrors] = useState({});

  const [pokemon, setPokemon] = useState({
    name: "",
    types: [],
    image: "",
    life: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
  });

  useEffect(() => {
    dispatch(getType());
  }, []);

  function handleSelect(e) {
    if(pokemon.types.length === 0 || pokemon.types.length === 1 ) {
      setPokemon({
        ...pokemon,
        types: [...pokemon.types, e.target.value],
      });
    } else {
      alert("Colocaste mas de 2 tipos")
    }    
  }


function onInputChange(e) {
  e.preventDefault();
  setPokemon({
    ...pokemon,
    [e.target.name]: e.target.value,
  });
  setErrors(
    validate({
      ...pokemon,
      [e.target.name]: e.target.value,
    })
  );
}


function onSubmit(e) {
  e.preventDefault();
  dispatch(postPokemon(pokemon));  
  alert("Personaje creado con exito");
  setPokemon({
    name: "",
    types: [],
    image: "",
    life: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
  });
  history.push("/home");
}

  return (
    <div className = "pagina">   
    <form className="fond " onSubmit={onSubmit}>
      <h3 className="title"> ¡Create Your Pokemon!</h3>
       <label for="name" className="stats"> Name: </label>
        <input
          onChange={onInputChange}
          id="name"
          name="name"
          type="text"
          value={pokemon.name}
          required
          className="input"
        />{" "}
        {errors.name && <p className="error"> {errors.name}</p>}
     
        
        <label htmlFor="" className="stats">Image: </label>
        <input
          onChange={onInputChange}
          name="image"
          type="text"
          value={pokemon.image}
          className="input"
        />{" "}
      
      
        {" "}
        <label htmlFor="" className="stats">Hp: </label>
        <input
          onChange={onInputChange}
          name="life"
          type="number"
          value={pokemon.life}
          className="input"
        />{" "}
    
     
        <label htmlFor="" className="stats">Attack: </label>
        <input
          onChange={onInputChange}
          name="attack"
          type="number"
          value={pokemon.attack}
          className="input"
        />{" "}
     
     
        <label htmlFor="" className="stats">Defense: </label>
        <input
          onChange={onInputChange}
          name="defense"
          type="number"
          value={pokemon.defense}
          className="input"
        />{" "}
     
     
        <label htmlFor="" className="stats">Speed: </label>
        <input
          onChange={onInputChange}
          name="speed"
          type="number"
          value={pokemon.speed}
          className="input"
        />{" "} 
        {" "}
        
        <label htmlFor="" className="stats">Height: </label>
        <input
          onChange={onInputChange}
          name="height"
          type="number"
          value={pokemon.height}
          className="input"
        />{" "}
     
     
        <label htmlFor="" className="stats">Weight: </label>
        <input
          onChange={onInputChange}
          name="weight"
          type="number"
          value={pokemon.weight}
          className="input"
        />{" "}
     
        {" "}
        <p className="typos">
        <select onChange={handleSelect} className= "t">  
             
            <option value = "Normal" className="tt">Normal  </option>
            <option value = "Flying" className="tt2"> Flying </option>
            <option value = "Poison" className="tt3"> Poison </option>
            <option value = "Ground" className="tt4"> Ground </option>
            <option value = "Bug" className="tt5"> Bug </option>
            <option value = "Fire" className="tt6"> Fire </option>
            <option value = "Water" className="tt7"> Water </option>
            <option value = "Grass" className="tt8"> Grass </option>
            <option value = "Electric" className="tt9"> Electric </option>
            <option value = "Fairy" className="tt10"> Fairy </option>                  
        </select>        
        </p>
      <Link to="/home"><button type="submit" className="boton2">Back</button></Link>
      <button type="submit" className="boton3">Create</button>
    </form>
    </div>
  );
}

