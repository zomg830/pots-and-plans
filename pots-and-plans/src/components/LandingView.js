import React from 'react';
import '../index.css';
import Title from './Title';
import Burger from './Burger';
import GoogleAuth from './GoogleAuth';

function Landing(){
    return(
        <div>
            <Title />
            <Burger />
            <GoogleAuth />
        </div>
    )

};
export default Landing;

