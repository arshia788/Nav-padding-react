import React from 'react';

import Navbar from './components/Navbar';
import Content from './components/Content';

const App = () => {
  return (
    <div className='py-1'>
      <Navbar />
      <Content />
    </div>
  );
};

export default App;