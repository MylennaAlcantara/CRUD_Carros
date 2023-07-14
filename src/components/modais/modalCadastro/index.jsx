import React, { useEffect, useState } from "react";
import { Container, Modal } from "./modalCadastro";

export const CadastroCarro = ({close, pesquisarModelos, dadosCarro, setDadosCarro, setModeloSelecionado}) =>{
    const [dados, setDados] = useState(dadosCarro || {
        modelo: "",
        ano: "",
        id_categoria: "",
        categoria: "",
    })
    const [categorias, setCategorias] = useState([]);

    useEffect(()=>{
        async function FetchCategoria(){
            const response = await fetch("http://10.0.1.107:8080/categoria")
            const data = await response.json();
            setCategorias(data);
        }
        FetchCategoria();
    },[])

    function pegarCategoria(e){
        const catego = String(e.target.value).split(" - ");
        setDados({
            ...dados,
            id_categoria: parseInt(catego[0]),
            categoria: String(catego[1])
        })
    }
    console.log(dados)
    async function salvar(){
        const response = await fetch("http://10.0.1.107:8080/modelo",{
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(dados)
        })
        .then((response)=>{
            if(response.status == 201){
                alert("salvou");
                close();
                pesquisarModelos();
                setModeloSelecionado();
            }
        })
    }

    async function editar(){
        const response = await fetch(`http://10.0.1.107:8080/modelo/${dadosCarro.id}`,{
            method: "PUT",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(dados)
        })
        .then((response)=>{
            if(response.status == 200 || response.status == 201){
                alert("Editou!");
                close();
                pesquisarModelos();
                setModeloSelecionado();
            }
        })
    }
    
    function cancelar (){
        setDadosCarro({
            id: "",
            modelo: "",
            ano: "",
            id_categoria: "",
            categoria: "",
        })
        close();
        setModeloSelecionado();
    }
    
    return(
        <Modal>
            <Container>
                    <div className="codigo">
                        {dadosCarro ? (<label >Código:</label>):null}
                        {dadosCarro ? (<label style={{margin: "0px"}}>{dados.id}</label>):null}
                    </div>
                <form>
                    <div style={{width: "20%"}}>
                        <label>Modelo:</label>
                        <label>Ano:</label>
                        <label>Categoria:</label>
                    </div>
                    <div>
                        <input value={dados.modelo} onChange={(e)=> setDados({...dados, modelo: e.target.value})}/>
                        <input value={dados.ano} onChange={(e)=> setDados({...dados, ano: e.target.value})}/>
                        <select value={dados.id_categoria+" - "+dados.categoria} onChange={pegarCategoria}>
                            <option>Selecione uma categoria</option>
                        {categorias.length && categorias.map((ct)=>{
                            return(
                                <option key={ct.id}>{ct.id} - {ct.categoria}</option>
                            )
                        })}
                        </select>
                    </div>
                </form>
                <div className="buttons">
                    <button onClick={dadosCarro.length ? salvar : editar}>Salvar</button>
                    <button onClick={cancelar}>Cancelar</button>
                </div>
            </Container>
        </Modal>
    )
}