import React from 'react';
import "./styles.css";
import NavImg from "../../assets/nav-img.svg";

const HomePage = () => {
    return (
        <body id='home'>
            <div className='logo' >
            <img src={NavImg} alt="" />
            <h2>Logotipo</h2>
            </div>
            <div className='image'>
                <img className='selected' src="https://www.verzani.com.br/wp-content/uploads/2020/04/controle-de-estoque.jpg" alt="" />
            </div>
        </body>
    )
}

export default HomePage;