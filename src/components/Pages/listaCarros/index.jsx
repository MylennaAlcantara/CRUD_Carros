import React, { useEffect, useState } from "react";
import * as L from "./carros";
import { CadastroCarro } from "../../modais/modalCadastro";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../footer";

export const ListaCarros = ()=>{
    const navigate = useNavigate();
    const [lista, setLista] = useState([]);
    const [isModelCadastro, setIsModelCadastro] = useState(false);
    const [modeloSelecionado, setModeloSelecionado] = useState();
    const [dadosCarro, setDadosCarro] = useState({
        id: '',
        modelo: "",
        ano: "",
        id_categoria: "",
        categoria: ""
    })

    function selecionarModelo(item, index){
        setModeloSelecionado(index);
        setDadosCarro({
            id: item.id,
            modelo: item.modelo,
            ano: item.ano,
            id_categoria: item.id_categoria,
            categoria: item.categoria
        });
    }

    function novo(){
        setDadosCarro({
            id: '',
            modelo: "",
            ano: "",
            id_categoria: "",
            categoria: ""
        });
        setIsModelCadastro(true);
        setModeloSelecionado();
    }

    function abrirEditar(item, index){
        setDadosCarro({
            id: item.id,
            modelo: item.modelo,
            ano: item.ano,
            id_categoria: item.id_categoria,
            categoria: item.categoria
        });
        setIsModelCadastro(true);
        setModeloSelecionado();
    }

    function editar(){
        if(modeloSelecionado){
            setIsModelCadastro(true);
        }else{
            alert("Nenhuma linha selecionada!");
            setModeloSelecionado();
        }
    }

    async function excluir(){
        if(!dadosCarro.id){
            alert("Nenhuma linha selecionada!")
        }else{
            const response = await fetch(`https://api-crud-carro.onrender.com/modelo/${dadosCarro.id}`,{
                method: "DELETE",
            })
            .then((response)=>{
                if(response.status != 500){
                    alert("Excluido!");
                    FetchCarros();
                    setModeloSelecionado();
                }
            })
        }
    }

    async function FetchCarros(){
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8080/modelo",{//"https://api-crud-carro.onrender.com/modelo",{
            method: "GET",
            headers: {
                'Authorization': `Bearer ${JSON.parse(token)}`,
            },
        })
        const data = await response.json();
        if(response.status === 401){
            alert("Realize o login para ter acesso ao conteudo!"+"\n Será direcionado para a pagina de login!" );
            navigate("/");
            localStorage.removeItem("token");
        }else{
            setLista(data.list);
        }
    }
    useEffect(()=>{
        FetchCarros();
    },[])


    return(
        <L.Container>
            <h3 style={{color:  "#4B9093", fontSize: "28px", fontWeight: "bold"}}>Lista de Carros</h3>
            <div  className="table" >
                <table cellspacing="0">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Modelo</th>
                            <th>Ano</th>
                            <th>Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lista ? lista.map((item, index)=> {
                            return(
                                <tr key={item.id} 
                                onClick={selecionarModelo.bind(this, item, index)} 
                                onDoubleClick={abrirEditar.bind(this, item, index)}
                                style={{backgroundColor: index == modeloSelecionado ? '#F59A73' : ''}}>
                                    <td>{item.id}</td>
                                    <td>{item.modelo}</td>
                                    <td>{item.ano}</td>
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
            {isModelCadastro ? <CadastroCarro close={()=> setIsModelCadastro(false)} pesquisarModelos={FetchCarros} dadosCarro={dadosCarro} setDadosCarro={setDadosCarro} setModeloSelecionado={setModeloSelecionado}/> : null}
            <Footer/>
        </L.Container>
    )
}
