import React from "react";
import * as A from "./alerta";
import { useNavigate } from "react-router-dom";

export const Alerta = () => {
    const navigate = useNavigate();
    return(
        <A.Modal>
            <A.Mensagem>
                <p>Usuario não logado!</p> 
                <p>Por favor realizar o login para continuar!</p>
                <button onClick={()=> {navigate("/"); localStorage.removeItem("token")}}>Login</button>
            </A.Mensagem>
        </A.Modal>
    )
}
