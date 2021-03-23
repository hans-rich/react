import React from 'react';
import Hello from './sayHello';

function App() {

  const sayHello = () => {
    console.log("hello");
  }


  return (
      <div>
        <h1>
          Hello React world
        </h1>
      <Hello/>
      </div>
  );
}

export default App;
