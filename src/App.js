import React from 'react';

import Navbar from './components/Navbar';
import Header from './components/header';
import Question1 from './pages/Main';
import Arrow from './components/Footer';
import GroupedButtons from './components/Input';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Question1 />
      <GroupedButtons/>
      <Arrow/>  
    </div>
  );
}

export default App;
