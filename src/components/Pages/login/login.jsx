import { styled } from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
`

export const Mensagem = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
    background-color: #4B9093;
    color: #F59A73;
    img{
        heigth: 24px;
        width: 24px;
    }
    a{
        text-decoration: none
    }
    div{
        display: flex;
    }
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #F4F7F8;
        background-color: #F59A73;
        margin: 5px;
        width: 100px;
        height: 24px;
        border: none;
        border-radius: 10px;
    }
    button:hover{
        color: #4B9093;
        cursor: pointer;
        background-color: #F4F7F8;
        border: 1px solid #F59A73;
    }
`

export const Login = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    color: #F59A73;
    h3{
        font-size: 25px;
    }
    label{
        margin: 10px 5px 5px 5px;;
    }
    form{
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .formulario{
        display: flex;
        flex-direction: row;
        width: 90%;
    }
    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: center;
    }
    input{
        background-color: #F4F7F8;
        border: none;
        border-left: 3px solid #4B9093;
        border-radius: 0 5px 5px 0;
        height: 24px;
        width: 85%;
        margin: 5px auto 5px 0px;
    }
    input:focus{
        border-bottom: 1px solid #4B9093;
        outline: 0;
    }
    button{
        color: #F4F7F8;
        background-color: #F59A73;
        margin: 5px;
        width: 100px;
        height: 24px;
        border: none;
        border-radius: 10px;
    }
    button:hover{
        color: #4B9093;
        cursor: pointer;
        background-color: #F4F7F8;
        border: 1px solid #F59A73;
    }
`