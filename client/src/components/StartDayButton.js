import React from 'react'

import RunGame from "../components/RunGame"

export default function StartDayButton(props) {
    return (
        <div>
            <button onClick =  { () => RunGame(props.id) }>Run Day</button>
        </div>
    )
}
