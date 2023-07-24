import React, { useState } from "react";
import * as L from "./login";
import { useNavigate } from "react-router-dom";

export const Login =() =>{
    const navigate = useNavigate();
    const [cadastro, setCadastro] = useState(false);
    const [dadosCadastro, setDadosCadastro] = useState({
        nome: "",
        email: "",
        senha: ""
    });
    const [dadosLogin, setDadosLogin] = useState({
        email: "",
        senha: ""
    });

    async function login (){
        try {
            const resp = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dadosLogin),
            });
    
            if (!resp.ok) {
                throw new Error('Falha na requisição.');
            }
    
            const data = await resp.json();
            if(data){
                localStorage.setItem("token", JSON.stringify(data.access_token));
                navigate("/modelos");
            }
        } catch (erro) {
            console.error('Ocorreu um erro:', erro);
        }
    }

    async function cadastrar(){
        fetch("http://10.0.1.107:8080/usuario/cadastrar", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosCadastro),
        })
        .then((resp)=>{
            if(resp.status === 201){
                alert("Cadastrado com sucesso!");
                setCadastro(false);
            }
        })
    }

    return(
        <L.Container>
            <L.Mensagem>
                <h1>Sejam bem vindos!</h1>
                <p>Esse projeto foi realizado como fomar re praticar as habilidades Full-stacks!</p>
                <p>Projeto realizado com JavaScript com a biblioteca React para o frontend, foi utilizado para o backend o Nodejs com o framework Nestjs, TypeORM para fazer a comunicação com o banco MySql utilizado.</p>
                <div>
                    <a href='https://github.com/MylennaAlcantara'><button><img src="/images/github.png"/>GitHub</button></a>
                    <a href='https://github.com/MylennaAlcantara/CRUD_Carros'><button><img src="/images/linkedin.png" style={{height: "15px", width: "15px", marginRight: "5px"}}/>LinkedIn</button></a>
                    <a href='https://github.com/MylennaAlcantara/CRUD_Carros'><button><img src="/images/insta.png"/>Instagram</button></a>                    
                </div>
            </L.Mensagem>
            <L.Login>
                {cadastro ? (
                    <>
                    <h3>Cadastre-se</h3>
                    <form>
                        <div className="formulario">
                            <div style={{width: "20%"}}>
                                <label>Nome:</label>
                                <label>Email:</label>
                                <label>Senha:</label>
                            </div>
                            <div>
                                <input onChange={(e)=> setDadosCadastro({...dadosCadastro, nome: e.target.value})}/>
                                <input onChange={(e)=> setDadosCadastro({...dadosCadastro, email: e.target.value})}/>
                                <input type="password" onChange={(e)=> setDadosCadastro({...dadosCadastro, senha: e.target.value})}/>
                            </div>
                        </div>
                        <div className="formulario">
                            <button onClick={cadastrar}>Cadastrar</button>
                            <button  type="submit" onClick={(e)=> {e.preventDefault();setCadastro(false)}}>Realizar Login</button>
                        </div>
                    </form>
                    </>
                ):(
                    <>
                    <h3>Entrar</h3>
                    <form onSubmit={(e)=>e.preventDefault()}>
                        <div className="formulario">
                            <div style={{width: "20%"}}>
                                <label>Email:</label>
                                <label>Senha:</label>
                            </div>
                            <div>
                                <input onChange={(e)=> setDadosLogin({...dadosLogin, email: e.target.value})}/>
                                <input type="password"  onChange={(e)=> setDadosLogin({...dadosLogin, senha: e.target.value})}/>
                            </div>
                        </div>
                        <div className="formulario">
                            <button onClick={login}>Entrar</button>
                            <button type="submit" onClick={(e)=> {e.preventDefault();setCadastro(true)}}>Cadastre-se</button>
                        </div>
                    </form>
                    </>
                )}
            </L.Login>
        </L.Container>
    )
}