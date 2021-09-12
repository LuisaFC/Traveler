import React from 'react';

import './styles.css'

import logoImg from '../../assets/Logo.png'

export default function Header(){

    return (
        <div className="header-container">
            <img src={logoImg} alt="logo"/>
            <button className="access-button">Acesso restrito</button>
        </div>
    )
}