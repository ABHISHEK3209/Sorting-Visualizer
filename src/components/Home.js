import React from 'react';
import './Home.css';
import Sidebar from './Sidebar';
import Visuals from './Visuals';

function Home() {
  return (
    <div >
      <div className="home">
      <Sidebar />
      <Visuals />
      </div>

 
   </div>
  )
}

export default Home;