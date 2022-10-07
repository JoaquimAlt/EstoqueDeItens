import React from 'react';
import "./styles.css";
import {NavLink} from "react-router-dom";
import ArchiveIcon from '@mui/icons-material/Archive';
import HomeIcon from '@mui/icons-material/Home';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import NavImg from "../../../assets/nav-img.svg";

const Navbar = () => {
  return (
    <div className='sidebar'>
        <ul>
        <img className='nav-img' src={NavImg} alt="" />
            <li>
                <NavLink to="/"><div><HomeIcon/> <p>Página Inicial</p></div></NavLink>
            </li>
            <li>
                <NavLink to="/cadastro"><div><ArchiveIcon/> <p>Cadastrar Itens</p></div></NavLink>
            </li>
            <li>
                <NavLink to="/cadastro"><div><CompareArrowsIcon/> <p>Transição de Itens</p></div></NavLink>
            </li>
        </ul>
        <p className='direitos'>© MatrixDesign</p>
    </div>
  )
}

export default Navbar