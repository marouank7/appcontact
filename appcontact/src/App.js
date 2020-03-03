import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/interface/Header'
import Liste from './components/contact/Liste'
import { Provider } from './context'
import AddContact from './components/contact/AddContact'

function App() {
  return (
    <Provider>
      <div className="App">
          <Header/>
        <div>
          <AddContact/>
        </div>
        <div className="Container">
          <Liste/>
        </div>
        
      </div>
    </Provider>
    
  );
}

export default App;
