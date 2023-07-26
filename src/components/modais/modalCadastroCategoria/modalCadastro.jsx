import { styled } from "styled-components";

export const Container = styled.div`
    height: 30%;
    width: 50%;
    background-color: #4B9093;
    border: none;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    .codigo{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: start;
        label{
            margin: 0 10px 0 15%;
        }
    }
    form{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div{
        width: 70%;
        display: flex;
        flex-direction: column;
        label{
            color: white;
            margin: 5px 10px 5px auto;;
        }
        input{
            margin-right: 10px;
            height: 20px;
            border: none;
            border-radius: 5px;
            margin: 5px 0;
        }
        select{
            margin-right: 10px;
            margin: 5px 0;
            height: 20px;
            border: none;
            border-radius: 5px;
        }
    }
    .buttons{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        button{
            background-color: #F59A73;
            margin: 5px;
            width: 100px;
            height: 24px;
            border: none;
            border-radius: 10px;
        }
        button:hover{
            cursor: pointer;
            background-color: #F4F7F8;
        }
    }
    @media(max-width: 460px){
        width: 90%;
        select,
        input{
            width: 95%;
        }
        div{
            align-items: end;
        }
    }
`

export const Modal = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`