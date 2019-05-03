import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav'
import routes from './routes'
import { HashRouter } from 'react-router-dom'



function App() {
  return (
    <HashRouter>
      <Nav />
      {routes}
    </HashRouter>
   
  );
}

export default App;
