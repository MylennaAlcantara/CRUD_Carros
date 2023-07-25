import React, { useEffect, useState } from "react";
import { Container, Modal } from "./modalCadastro";
import { Alerta } from "../../alerta";

export const CadastroCategoria = ({close, pesquisarCategorias, dadosCategoria, setDadosCategoria, setCategoriaSelecionada}) =>{
    const [alerta, setAlerta] = useState("");
    const [botao, setBotao] = useState("");
    const [mensagem, setMensagem] = useState(false);
    const [dados, setDados] = useState(dadosCategoria || {
        categoria: "",
    })
   
    async function salvar(){
        const response = await fetch("https://api-crud-carro.onrender.com/categoria",{
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({categoria: dados.categoria})
        })
        .then((response)=>{
            if(response.status == 201){
                setMensagem(true);
                alerta("Salvou!");
                setBotao("OK");
                cancelar();
                pesquisarCategorias();
                setCategoriaSelecionada();
            }
        })
    }
    async function editar(){
        const response = await fetch(`https://api-crud-carro.onrender.com/categoria/${dadosCategoria.id}`,{
            method: "PUT",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({categoria: dados.categoria})
        })
        .then((response)=>{
            if(response.status == 200){
                setMensagem(true);
                alerta("Editou!");
                setBotao("OK");
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
                {mensagem ? <Alerta mensagem ={alerta} botao={botao} funcaoBotao={()=> setMensagem(false)}/> : null}
            </Container>
        </Modal>
    )
}
