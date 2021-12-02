
import './App.css';

import {BrowserRouter as Router , Route , Routes } from 'react-router-dom';

import Header from './components/Layout/Header';
import React from 'react';
import {Provider} from './context';
import Index from './components/Layout/Index';
import Lyrics from './components/Tracks/Lyrics';

function App() {
  return (
    <Provider> 
    <Router>
    <React.Fragment>
      <Header/>
      <div className="container">
        <Routes>
          <Route exact path='/lyrics-finder-app/' element ={<Index/>}/>
          <Route exact path="/lyrics-finder-app/lyrics/track/:id" element ={<Lyrics/>}/>
        </Routes>
      </div>
    </React.Fragment>
    </Router>
    </Provider>
  );
}

export default App;
