import React from "react";
import * as A from "./alerta";
import { useNavigate } from "react-router-dom";

export const Alerta = ({mensagem, botao, funcaoBotao}) => {
    const navigate = useNavigate();
    return(
        <A.Modal>
            <A.Mensagem>
                <p>{mensagem}</p> 
                <button onClick={funcaoBotao}>{botao}</button>
            </A.Mensagem>
        </A.Modal>
    )
}
