import React from 'react';
import Sidebar from "./components/layouts/Sidebar"
import Main from './components/layouts/Main';
import './App.css';


function App() {
  return (
    <div className="App">
      <div>
        <Sidebar />
      </div>
      <div>
        <Main />
      </div>
    </div>
  );
}

export default App;
