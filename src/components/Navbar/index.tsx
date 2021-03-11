import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

function NavBar(): ReactElement {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </div>
  );
}

export default NavBar;
