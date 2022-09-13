import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPoke } from "../store/actions/index";
import "./Buscar.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("")


  
  const handleInputChange = (e) => {
    e.preventDefault()
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchPoke(name))
  }

  return (
    <div className="neg">
      <input className="bus" type="text" onChange= {(e) => handleInputChange(e)} placeholder="Search Pokemon..."/>
      <button className ="boton" type="submit" onClick= {(e) => handleSubmit(e)}> Search </button>
    </div>
  );
}
