import React from 'react';
import '../index.css';
import burgerImg from '../images/burger.png'


function Burger(){
    return(
        <img src={ burgerImg } alt="burger" id="burger-img"/>
    )
}
export default Burger;