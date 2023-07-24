import { styled } from "styled-components";

export const container = styled.div`
    height: 20%;
    background-color: #4B9093;
    width: 100%;
    
    div:before{
        content: "";
        display: block;
        position: relative;
        border-radius: 100% 50%;
        width: 340px;
        height: 80px;
        background-color: white;
        right: -5px;
        bottom: 40px;
    }
    div:after {
        content: "";
        display: block;
        position: relative;
        border-radius: 100% 50%;
        width: 300px;
        height: 70px;
        background-color: #4B9093;
        left: 0;
        bottom: 27px;
      }
`