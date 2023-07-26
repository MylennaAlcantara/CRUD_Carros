import { BrowserRouter, Route, Router, Routes, redirect } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/index';
import { ListaCarros } from './components/Pages/listaCarros';
import { ListaCategoriasCarro } from './components/Pages/listaCategorias';
import { Login } from './components/Pages/login';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [visivel, setVisivel] = useState(false);
  return (
    <div className="App">
        {visivel ? <Header/> : null}
        <Routes>
          <Route element={<Login setVisivel={setVisivel}/>} path="/"/>
          <Route element={<ListaCarros setVisivel={setVisivel}/>} path='/modelos'/>
          <Route element={<ListaCategoriasCarro setVisivel={setVisivel}/>} path='/categoriasDeCarros'/>
        </Routes>
    </div>
  );
}

export default App;
