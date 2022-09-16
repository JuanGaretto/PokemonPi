import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
      <header id="navegador" className="header">       
          <img  className="logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png" alt="404" />
        <Link to="/">
          <h3 className= "logo2">Home</h3>
        </Link>
        <div> <Link to="/create" className="created" >
              CREATE POKEMON
            </Link></div>
            
            
  
      </header>

  );
}
