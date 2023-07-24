import React from "react";
import * as F from "./footer";

export const Footer = () => {
    return(
        <F.container>
            <div>
                <a href='https://github.com/MylennaAlcantara'><button><img src="/images/github.png" style={{height: "20px", width: "20px"}}/>GitHub</button></a>
                <a href='https://github.com/MylennaAlcantara/CRUD_Carros'><button><img src="/images/linkedin.png" style={{height: "15px", width: "15px", marginRight: "5px"}}/>LinkedIn</button></a>
                <a href='https://github.com/MylennaAlcantara/CRUD_Carros'><button><img src="/images/insta.png" style={{height: "20px", width: "20px"}}/>Instagram</button></a>                    
            </div>
        </F.container>
    );
}