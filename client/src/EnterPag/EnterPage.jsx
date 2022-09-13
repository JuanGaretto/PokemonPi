import React from "react";
import { Link } from "react-router-dom";
import "./EnterPag.css"

export default function LandingPage() {
    return (
      <div className="pi">
        <div style={{display:'flex', flexFlow:'column'}}>       
          
          <Link to="/home">
            <button className="button">GET IN</button>           
          </Link>          
          </div>
          
  </div>   
    )
  }