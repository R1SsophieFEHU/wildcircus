import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import "./styles/common.css";
import "./styles/space.css";
import "./styles/layout.css";
import NewsLetter from './components/NewsLetter';
import Header from './components/Header';
import BodyCircus from './components/BodyCircus';
import Artist from './components/Artist';
import Representation from './components/Representation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" render ={() => <BodyCircus/>}/>
        <Route path="/artists" render = {()=> <Artist/>}/>
        <Route path="/representations" render = {()=> <Representation/>}/>
      </Switch>
      <NewsLetter/>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
