import './App.css';

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import PoemsContainer from './PoemsContainer';
import Navigation from './Navigation';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
      <div className="App">
        <Navigation/>
        <Routes>
          <Route path="/poems" element={<PoemsContainer />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
  );
}

export default App;