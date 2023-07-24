import React, { useEffect, useState } from "react";
import * as L from "./categorias";
import { CadastroCategoria } from "../../modais/modalCadastroCategoria";
import { useNavigate } from "react-router-dom";

export const ListaCategoriasCarro = ()=>{
    const navigate = useNavigate();
    const [lista, setLista] = useState([]);
    const [isModelCadastro, setIsModelCadastro] = useState(false);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState();
    const [dadosCategoria, setDadosCategoria] = useState({
        id: '',
        categoria: ""
    })

    function selecionarCategoria(item, index){
        setCategoriaSelecionada(index);
        setDadosCategoria({
            id: item.id,
            categoria: item.categoria
        });
    }

    function novo(){
        setDadosCategoria({
            id: '',
            categoria: ""
        });
        setIsModelCadastro(true);
        setCategoriaSelecionada();
    }

    function abrirEditar(item, index){
        setDadosCategoria({
            id: item.id,
            categoria: item.categoria
        });
        setIsModelCadastro(true);
    }

    function editar(){
        if(categoriaSelecionada){
            setIsModelCadastro(true);
        }else{
            alert("Nenhuma linha selecionada!");
            setCategoriaSelecionada();
        }
    }

    async function excluir(){
        if(!dadosCategoria.id){
            alert("Nenhuma linha selecionada!")
        }else{
            const response = await fetch(`https://api-crud-carro.onrender.com/categoria/${dadosCategoria.id}`,{
                method: "DELETE",
            })
            .then((response)=>{
                if(response.status != 500){
                    alert("Excluido!");
                    FetchCarros();
                    setCategoriaSelecionada();
                }
            })
        }
    }

    async function FetchCarros(){
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8080/categoria",{//"https://api-crud-carro.onrender.com/categoria",{
            method: "GET",
            headers: {
                'Authorization': `Bearer ${JSON.parse(token)}`,
            },
        });
        const data = await response.json();
        if(response.status === 401){
            alert("Realize o login para ter acesso ao conteudo!"+"/n Será direcionado para a pagina de login!" );
            navigate("/");
            localStorage.removeItem("token");
        }else{
            setLista(data);
        }
    }
    useEffect(()=>{
        FetchCarros();
    },[])


    return(
        <L.Container>
            <h3 style={{color:  "#4B9093", fontSize: "28px", fontWeight: "bold"}}>Lista de Categorias</h3>
            <div  className="table" >
                <table cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lista.length ? lista.map((item, index)=> {
                            return(
                                <tr key={item.id} 
                                onClick={selecionarCategoria.bind(this, item, index)}
                                onDoubleClick={abrirEditar.bind(this, item, index)}
                                style={{backgroundColor: index == categoriaSelecionada ? "#F59A73" : ""}}>
                                    <td>{item.id}</td>
                                    <td>{item.categoria}</td>
                                </tr>
                            )
                        }) : null}
                    </tbody>
                </table>
            </div>
            <div className="buttons">
                <button onClick={novo}>Novo</button>
                <button onClick={editar}>Editar</button>
                <button onClick={excluir}>Excluir</button>
            </div>
            {isModelCadastro ? <CadastroCategoria close={()=> setIsModelCadastro(false)} pesquisarCategorias={FetchCarros} dadosCategoria={dadosCategoria} setDadosCategoria={setDadosCategoria} setCategoriaSelecionada={setCategoriaSelecionada}/> : null}
        </L.Container>
    )
}
