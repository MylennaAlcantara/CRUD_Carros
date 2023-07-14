import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 10%;
    background-image: linear-gradient( to right, #4B9093, #F4F7F8 );
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: sticky;
    top: 0;
    @media(max-width: 480px){
        justify-content: space-between;
    }
`

export const Menu = styled.div`
    height: 100%;
    button{
        font-size: 15px;
        height: 100%;
        color: #4B9093;
        border: none;
        background-color: transparent;
    }
    button:hover{
        cursor: pointer;
        color: white;
        border: 1px solid #F4F7F8;
        background-color: #4B9093;
    }
    @media(max-width: 480px){
        button{
            width: 80px;
        }
    }
`