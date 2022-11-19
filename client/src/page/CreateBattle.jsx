import React from 'react';

import { PageHOC } from '../components';

const Home = () => {
  return (
    <div>
      <h1 className='text-white text-xl'>Hello from CreateBattle</h1>
    </div>
  )
};

export default PageHOC(
  Home,
  <>Create <br /> a new battle!</>,
  <>Create your own battle and wait 
  for others to join you</>
);