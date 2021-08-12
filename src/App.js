import React from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap'

import Header from './components/Header.js'
//import Image from './components/Image.js'
import Dashes from './components/Dashes.js'
//import Letters from './components/Letters.js'

function App() {
  return (
    <Container>
      <Row>
        <Header />
        <Dashes />
      </Row>

    </Container>
  );
}

export default App;
