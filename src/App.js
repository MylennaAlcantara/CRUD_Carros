import { BrowserRouter, Route, Router, Routes, redirect } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/index';
import { ListaCarros } from './components/Pages/listaCarros';
import { ListaCategoriasCarro } from './components/Pages/listaCategorias';
import { Login } from './components/Pages/login';

function App() {
  const token = localStorage.getItem("token");
  return (
    <div className="App">
        {token != null ? <Header/> :null}
        <Routes>
          <Route Component={Login} path="/"/>
          <Route Component={ListaCarros} path='/modelos'/>
          <Route Component={ListaCategoriasCarro} path='/categoriasDeCarros'/>
        </Routes>
    </div>
  );
}

export default App;
