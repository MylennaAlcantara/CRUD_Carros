import React, { useEffect, useState } from "react";
import * as L from "./carros";
import { CadastroCarro } from "../../modais/modalCadastro";

export const ListaCarros = ()=>{
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
            const response = await fetch(`http://10.0.1.107:8080/modelo/${dadosCarro.id}`,{
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
        const response = await fetch("http://10.0.1.107:8080/modelo");
        const data = await response.json();
        setLista(data.list);
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
                        {lista.length ? lista.map((item, index)=> {
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
        </L.Container>
    )
}