import './App.css';

import { Routes, Route } from "react-router-dom";
import PoemsList from './PoemsList';
import Navigation from './Navigation';
import PoemPost from './PoemPost';
import Home from './Home';

function App() {

  return (
      <div className="App">
        <Navigation/>
        <Routes>
          <Route path="/poem_new" element={<PoemPost />} />
          <Route path="/poems" element={<PoemsList />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
  );
}

export default App;