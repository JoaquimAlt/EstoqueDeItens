import React from 'react';
import HomeImg from "../../assets/home-img.svg"
import Background from "../../assets/background.svg";
import Button from '@mui/material/Button';
import ArchiveIcon from '@mui/icons-material/Archive';
import {NavLink} from "react-router-dom";
import "./styles.css";

const HomePage = () => {
    return (
        <body id='home'>
            <div className='texts'>
            <img src={HomeImg} alt="" />
            <div className='logo'>.</div>
            <div className='text'>
                <p>Aqui você pode cadastrar os itens que desejar.</p>
                <NavLink to="/cadastro"><Button className='button-home' variant="contained" color="primary">Cadastrar<ArchiveIcon/></Button></NavLink>
            </div>
            </div>
            <div className='image'>
                <img src={Background} alt="" />
            </div>
        </body>
    )
}

export default HomePage;