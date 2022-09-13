import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getPokemons,filterPokemonsByType,filterCreated,Sort} from "../store/actions/index";
import { Link } from "react-router-dom";
import CardPokemon from "../CardPokemon/CardPokemon";
import Paginado from "../Paginado/Paginado";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/Buscar";
import "./Home.css";



function Home() {
    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons) //
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage] = useState(12);
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = allPokemons.slice(
      indexOfFirstPokemon,
      indexOfLastPokemon
    );
  
    const paginado = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    useEffect(() => {
      dispatch(getPokemons());      
    }, [dispatch]);
  
    function handleFilterType(e) {
      dispatch(filterPokemonsByType(e.target.value));
    }
  
    function handleFilterCreated(e) {
      dispatch(filterCreated(e.target.value));
    }
  
  
  
    function onSelectsChange(e) {
      dispatch(Sort(e.target.value));
    }
  
    return (
      <>
   
        <NavBar />
        
        <SearchBar className="search"/>
        <div className="home">
          <div>
            <select name="select" onChange={onSelectsChange} className="a-z">
              <option value="Filtro" className="menu"> Filter</option>
              <option value="asc" className="menu">A-Z</option> {/* a-z */}
              <option value="des" className="menu">Z-A</option>
            </select>
            <select name="select" onChange={onSelectsChange} className="attack">
              <option value="Ataque" className="menu">Attack</option>
              <option value="may" className="menu">Highest Attack</option>
              <option value="men" className="menu">Lowest Attack</option>
            </select>
            <select onChange={handleFilterType}>
              <option value="type" className="menu"> Type </option>
              <option value="normal"  className="menu"> Normal </option>
              <option value="flying" className="menu"> Flying </option>
              <option value="poison" className="menu"> Poison </option>
              <option value="ground" className="menu"> Ground </option>
              <option value="bug" className="menu"> Bug </option>
              <option value="fire" className="menu"> Fire </option>
              <option value="water" className="menu"> Water </option>
              <option value="grass" className="menu"> Grass </option>
              <option value="electric" className="menu"> Electric </option>
              <option value="fairy" className="menu"> Fairy </option>
            </select>
            <select onChange={handleFilterCreated}>
              <option value="Todos" className="menu"> All </option>
              <option value="Creados" className="menu"> Created </option>
              <option value="Existentes" className="menu"> Exist </option>
            </select>
            <Paginado
              pokemonsPerPage={pokemonsPerPage}
              allPokemons={allPokemons.length}
              paginado={paginado}
            />
             
            {currentPokemons?.map((e) => {
                return (
                  <fragment>
                    <Link to={"/home/" + e.id}>
                      <CardPokemon
                        name={e.name}
                        image={e.image}
                        types={e.types}
                      />
                    </Link>
                    
                  </fragment>
                );
              })} 
              
          </div>
          
        </div>
       
      </>
     
    );
  }
  
  export default Home;
  
