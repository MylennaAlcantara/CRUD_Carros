import React from "react";
import * as F from "./footer";

export const Footer = () => {
    return(
        <F.container>
            <div>
                <a href='https://github.com/MylennaAlcantara'><button><img src="/images/github.png" style={{height: "20px", width: "20px"}}/>GitHub</button></a>
                <a href='https://www.linkedin.com/in/mylenna-alcantara-6a239617b'><button><img src="/images/linkedin.png" style={{height: "15px", width: "15px", marginRight: "5px"}}/>LinkedIn</button></a>
                <a href='https://instagram.com/mylenna.alcantara?igshid=MzNlNGNkZWQ4Mg=='><button><img src="/images/insta.png" style={{height: "20px", width: "20px"}}/>Instagram</button></a>                    
            </div>
            <p>by Mylenna Alcantara | @2023</p>
        </F.container>
    );
}