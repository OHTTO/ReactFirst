import React, { Component } from 'react';

import ShoppingList from './ShoppingList'
import MovementEvents from './MovementEvents'
import './ShoppingList.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShoppingList />
      </div>
    );
  }
}

export default App;
