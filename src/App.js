import React from 'react'

import './sass/main.css'

import Header from './components/Header.js'
import Main from './components/Main.js'

function App() {
  return (
    <div className="main-container">
        <Header />
        <Main />
    </div>
  );
}

export default App;
