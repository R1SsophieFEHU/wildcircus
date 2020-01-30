import React from 'react';
import {Link} from 'react-router-dom';


function Header() {
  return (
    <div>
      <div className="header">
        <p className="space:stack">Wild Circus</p>
      </div>
      <div className="flex:row flex-main:space-around">
        <Link className="navLink" to="/">HOME</Link>
        <Link className="navLink" to="/representations">REPRESENTATIONS</Link>
        <Link className="navLink" to="/artists">ARTISTS</Link>
      </div>
    </div>
    
  );
}

export default Header;