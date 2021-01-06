import React from 'react';

import Store from './store';

import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { ImageList } from './components/ImageList';

import './style.scss'

function App() {
  return (
    <Store>
      <Header />
      <Navbar />
      <ImageList />
    </Store>
  );
}

export default App;
