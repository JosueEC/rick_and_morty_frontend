import './App.css';
import { Routes, Route} from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Cards from "./pages/Characters/components/Cards";
import About from "./pages/About/components/About";
import Details from "./pages/Details/components/Details";
import Home from "./pages/Home/components/Home";
import Contact from "./pages/Contact/components/Contact";
import Login from "./pages/Login/components/Login";
import Favorites from './pages/Favorites/components/Favorites';

import {pathAbout, 
        pathCharacters, 
        pathContact, 
        pathDetails, 
        pathFavorites, 
        pathHome, 
        pathLogin} from './adapters/routePaths';


function App() {
  const [characters,setCharacters] = useState([]);

  const closeCharacter = (id)=>{
    const cards = characters.filter(character=>{
      return (character.id !== id);
    });
    setCharacters(cards);
  }

  const characterExists = (id)=>{
    const exist = characters.filter(character=>{
      return (character.id === id);
    });
    return (exist.length===0);
  }

  const searchCharacter = (id)=> {
    const URL_BASE = 'https://be-a-rym.up.railway.app/api';
    const API_KEY = '274359bf4107.56dbe99b821712ca7118';
    
    fetch(`${URL_BASE}/character/${id}?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name && characterExists(data.name)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert(`${data.name} ya esta agregado`);
        }
    });
  }

  return (
    <div>
      <NavBar onSearch={searchCharacter}/>
      <Routes>

        <Route 
          path= {pathLogin}
          element={<Login/>}>
        </Route>

        <Route 
          path={pathHome} 
          element={<Home/>}>
        </Route>

        <Route 
          path={pathCharacters}
          element={<Cards characters={characters} onClose={closeCharacter}/>}>
        </Route>

        <Route
          path={pathFavorites}
          element={<Favorites/>}>  
        </Route>

        <Route
          path={pathDetails}
          element={<Details/>}>  
        </Route>

        <Route
          path={pathAbout}
          element={<About/>}>  
        </Route>

        <Route
          path={pathContact}
          element={<Contact/>}>  
        </Route>
        

      </Routes>
    </div>
  );
}

export default App;
