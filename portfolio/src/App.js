import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Kevin Nguyen's Portfolio Website
      </header>
      <div className="items">
        <div className="one">
          <div className="item-title item-div">
            ShopTrak
          </div>
          <div className="item-desc item-div">
            Web app where users can share shopping lists with others
          </div>
          <div className="item-app item-div link">
            <a href="https://labs10-shopping-list.netlify.com/">
              app
            </a>
          </div>
          <div className="item-github item-div link">
            <a href="https://github.com/Lambda-School-Labs/labs10-shopping-list">
              github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
