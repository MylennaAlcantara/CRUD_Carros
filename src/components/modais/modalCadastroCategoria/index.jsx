import React, { useEffect, useState } from "react";
import { Container, Modal } from "./modalCadastro";

export const CadastroCategoria = ({close, pesquisarCategorias, dadosCategoria, setDadosCategoria, setCategoriaSelecionada}) =>{
    const [dados, setDados] = useState(dadosCategoria || {
        categoria: "",
    })
   
    async function salvar(){
        const response = await fetch("http://10.0.1.107:8080/categoria",{
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({categoria: dados.categoria})
        })
        .then((response)=>{
            if(response.status == 201){
                alert("salvou");
                cancelar();
                pesquisarCategorias();
                setCategoriaSelecionada();
            }
        })
    }
    async function editar(){
        const response = await fetch(`http://10.0.1.107:8080/categoria/${dadosCategoria.id}`,{
            method: "PUT",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({categoria: dados.categoria})
        })
        .then((response)=>{
            if(response.status == 200){
                alert("Editou!");
                cancelar();
                pesquisarCategorias();
                setCategoriaSelecionada();
            }
        })

    }
    function cancelar (){
        setDadosCategoria({
            id: "",
            categoria: ""
        });
        close();
        setCategoriaSelecionada();
    }

    return(
        <Modal>
            <Container>
                <div className="codigo">
                    {dadosCategoria ? (<label >Código:</label>):null}
                    {dadosCategoria ? (<label style={{margin: "0px"}}>{dados.id}</label>):null}
                </div>
                <form>
                    <div style={{width: "20%"}}>
                        <label>Categoria:</label>
                    </div>
                    <div>
                        <input value={dados.categoria} onChange={(e)=> setDados({...dados, categoria: e.target.value})}/>
                    </div>
                </form>
                <div className="buttons">
                    <button onClick={dadosCategoria.length ? salvar : editar}>Salvar</button>
                    <button onClick={cancelar}>Cancelar</button>
                </div>
            </Container>
        </Modal>
    )
}