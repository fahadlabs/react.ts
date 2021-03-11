import React, { ReactElement } from 'react';

import { Navbar } from '../../components';
import './style.scss';

function About(): ReactElement {
  return (
    <div>
      <Navbar />
      <h1 className='about'>About</h1>
    </div>
  );
}

export default About;
