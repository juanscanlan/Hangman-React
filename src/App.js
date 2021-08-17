import React from 'react'

//import './App.css'
import './sass/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//import { Container, Row } from 'react-bootstrap'

import Header from './components/Header.js'
//import Image from './components/Image.js'
import Dashes from './components/Dashes.js'
//import Letters from './components/Letters.js'

function App() {
  return (
    <div className="container">
        <Header />
        <Dashes />
    </div>
      

  );
}

export default App;
