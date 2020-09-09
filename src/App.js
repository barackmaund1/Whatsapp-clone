import React from 'react';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    // BEM naming convention
    <div className="App">
      
     <div className='app__body'>
       {/*sidebar*/}
       <Sidebar/>
       {/*chat*/}
     </div>

    </div>
  );
}

export default App;
