import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Navbar.jsx';
import Fundo from './Fundo.jsx';
import Meio from './Meio.jsx'
import Carroseldoprof from './Carroseldoprof.jsx';
import Segundomeio from './Segundomeio.jsx';

function App() {
  return (
    <Fundo>
      <Navbar></Navbar>
      <Meio></Meio>
      <Carroseldoprof></Carroseldoprof>
      <Segundomeio/>
    </Fundo>
  )
}

export default App;
