import React, {useState, useEffect} from 'react';
import Sidebar from "./components/layouts/Sidebar"
import Main from "./components/layouts/Main"
import Loader from "./components/layouts/Loader"
import FloatingBtn from "./components/layouts/FloatingBtn"
import './App.css';

function App () {
  const [loading, setLoading] = useState (true);

  useEffect (() => {
    setTimeout (() => {
      setLoading (false);
    }, 1000 * 3);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <div className="side">
        <Sidebar />
      </div>
      <div className="main">
        <Main />
        <FloatingBtn />
      </div>
    </div>
  );
}

export default App;
