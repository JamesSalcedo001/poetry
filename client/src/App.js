import './App.css';

import { Routes, Route } from "react-router-dom";
import PoemsContainer from './PoemsContainer';
import Navigation from './Navigation';
import PoemPost from './PoemPost';

function App() {

  return (
      <div className="App">
        <Navigation/>
        <Routes>
          <Route path="/poem_new" element={<PoemPost />} />
          <Route path="/poems" element={<PoemsContainer />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
  );
}

export default App;