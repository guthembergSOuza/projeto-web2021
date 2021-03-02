import React from 'react'
import './App.css';
import LoginPage from './pages/login/LoginPage'
import LojistaPage from './pages/lojista/LojistaPage'

import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div class="App">
        <Route path='/' exact component={LoginPage}/>
        <Route path='/lojista' component={LojistaPage}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
