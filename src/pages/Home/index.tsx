import React from 'react';

import './styles.css'

import Header from '../../componets/Header';
import Card from '../../componets/Cards';

export default function Home(){

    return(
        <div className="home-container">

            <Header />

            <div>
                <div className="left-container">
                    <h1 className='home-title'>Viva uma grande aventura</h1>
                    <span className='home-description'>Descubra locais incríveis para se visitar em cidades maravilhosas de Santa Catarina</span>
                    <br/>
                    <button className='search-places' >Descobrir todos os lugares</button>
                </div>

                <div>
                    <Card/>
                </div>
            </div>
        </div>
    )
}