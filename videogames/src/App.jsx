import { createContext, useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';


const GameContext = createContext();

function App() {
  const [videogames, setVideogames] = useState([]);
  const [developers, setDevelopers] = useState([]);

  const fetchVideogames = async () => {
    const response = await fetch(
      `http://localhost:5000/videogames`
    );
    const data = await response.json();
    setVideogames(data);
  }

  useEffect(() => {
    fetchVideogames();
  }, []);

  const fetchDevelopers = async () => {
    const response = await fetch(
      `https://boolean-uk-api-server.fly.dev/tuvaea/post`
    );
    const data = await response.json();
    setDevelopers(data);
  }

  useEffect(() => {
    fetchDevelopers();
  }, []);


  return (
    <>
      <GameContext.Provider
      value={{
        videogames,
        setVideogames,
        developers,
        setDevelopers,
        fetchVideogames,
        fetchDevelopers}}>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>


      </GameContext.Provider>
    </>
  )
}

export {App, GameContext}
