import React from 'react'
import Title from '../components/Title'
import Burger from '../components/Burger'
import RandEventImg from '../components/RandEventImg'

function RandomEventView(){
    return (
        <div>
            <Title />
            <Burger />
            <RandEventImg 
            //  src = ??? depends on the randomEvent function in the game loop. will this be held in state? 
            />
        </div>
    )
}