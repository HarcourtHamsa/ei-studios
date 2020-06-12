import React, { useState, useEffect } from 'react';
import Sidebar from "./components/layouts/Sidebar"
import Main from './components/layouts/Main';
import './App.css';
import FloatingBtn from './components/layouts/FloatingBtn';


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000 * 3)
  }, [])

  if (loading) {
    return <p className="center">Eddie is thinking ...</p>
  }

  return (
    <div className="App">
      <div>
        <Sidebar />
      </div>
      <div>
        <Main />
        <FloatingBtn />
      </div>
    </div>
  );
}

export default App;
