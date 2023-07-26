import { styled } from "styled-components";

export const Modal = styled.div`
    width: 100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: #F4F7F8;
    opacity: 0.9;
`

export const Mensagem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: white;
    background-color:#4B9093;
    height: 20%;
    width: 25%;
    border-radius: 10px;
    @media(max-width: 460px){
        width: 90%;
    }
`