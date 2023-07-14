import { BrowserRouter, Route, Router, Routes, redirect } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/index';
import { ListaCarros } from './components/Pages/listaCarros';
import { ListaCategoriasCarro } from './components/Pages/listaCategorias';

function App() {

  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route Component={ListaCarros} path='/'/>
          <Route Component={ListaCategoriasCarro} path='/categoriasDeCarros'/>
        </Routes>
    </div>
  );
}

export default App;
