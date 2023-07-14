import { styled } from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .buttons{
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
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
    @media(max-width: 480px){
        justify-content: start;
        margin-top: auto;
    }
    
`