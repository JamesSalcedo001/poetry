import './App.css';

import { Routes, Route } from "react-router-dom";
import PoemsList from './PoemsList';
import Navigation from './Navigation';
import NewPoemForm from './NewPoemForm';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import AllContextProvider from './context/allContext';

function App() {

  return (
      <div className="App">
        <AllContextProvider>
          <Navigation/>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/poem_new" element={<NewPoemForm />} />
            <Route path="/poems" element={<PoemsList />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </AllContextProvider>
      </div>
  );
}

export default App;