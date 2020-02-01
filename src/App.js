import React from 'react';
import Wall from './frontend/components/Wall'
import BookShelf from './frontend/components/BookShelf'
import lamp from './frontend/assets/svgs/lamp.svg'
import monitor from './frontend/assets/svgs/monitor.svg'
import memoji from './frontend/assets/svgs/memoji.svg'
import water from './frontend/assets/svgs/water.svg'
import rubiks from './frontend/assets/svgs/rubiks.svg'
import './App.css';

function App() {
  return (
    <div>
      <Wall />
      <BookShelf />
      <MainShelf />
    </div>
  );
}

function MainShelf () {
  return (
    <div className='MainShelfElement'>
      <div className='MainShelfItems'>
        <div className='lamp'>
          <img src={lamp} alt='' className='lamp-image' />
        </div>
        <div className='monitor'>
          <img src={monitor} alt='' className='monitor-image' />
        </div>
        <div className='memoji'>
          <img src={memoji} alt='' className='memoji-image' />
        </div>
        <div className='water'>
          <img src={water} alt='' className='water-image' />
        </div>
        <div className='rubiks'>
          <img src={rubiks} alt='' className='rubiks-image' />
        </div>
      </div>
      <div className='MainShelf'><div className='Shelf'></div></div>
    </div>
  );
}

export default App;
