import React from 'react';
import "./styles/common.css";
import "./styles/space.css";
import "./styles/layout.css";
import NewsLetter from './components/NewsLetter';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />

      <NewsLetter/>
    </div>
    
  );
}

export default App;
