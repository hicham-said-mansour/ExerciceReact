import { findByLabelText } from '@testing-library/dom';
import React from 'react';
import './Header.css'
import {NavLink} from 'react-router-dom';

const styledHeader={
  display: "flex" ,
  justifyContent : 'space-between',
  backgroundColor: "bisque",
  paddingLeft: "10%",
  paddingRight: "10%",
  color:"blue"
}



function Header() {
  return(

    <div style={styledHeader}>
     <div>
        <h1>Hisham Said-Mansour</h1>
        <h3>General Manager</h3>
     </div>
     
      <div className="navbarre">
         <NavLink to= "/home">Home</NavLink>
         <NavLink to= "/Projects">Projects</NavLink>
         <NavLink to= "/Resume">Resume</NavLink>

             
      </div>
    

    </div>

  );
}

export default Header;