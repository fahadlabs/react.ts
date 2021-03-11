import React, { ReactElement } from 'react';

import Logo from '../../assets/images/logo.png';
import { Navbar } from '../../components';
import './style.scss';

function Home(): ReactElement {
  return (
    <div>
      <Navbar />
      <h1 className='home'>Hello World</h1>
      <img alt='test' src={Logo} />
    </div>
  );
}

export default Home;
