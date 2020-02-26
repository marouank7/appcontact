import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Liste from './components/Liste'

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="Container">
            <Liste/>
        </div>
    </div>
  );
}

export default App;
