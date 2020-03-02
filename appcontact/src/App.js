import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Liste from './components/Liste'
import { Provider } from './context'
function App() {
  return (
    <Provider>
      <div className="App">
          <Header/>
        <div className="Container">
            <Liste/>
        </div>
      </div>
    </Provider>
    
  );
}

export default App;
