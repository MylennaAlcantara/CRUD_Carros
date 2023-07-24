import React from "react";
import * as H from "./Header";
import { Navigate, useNavigate } from "react-router-dom";

export const Header = () =>{
    const navigate = useNavigate();
    return(
        <H.Container>
            <h1>Crud de Carros</h1>
            <H.Menu>
                <button onClick={()=> navigate("/modelos")}>Lista de Carros</button>
                <button onClick={()=> navigate("/categoriasDeCarros")}>Lista de Categorias</button>
            </H.Menu>
        </H.Container>
    )
}