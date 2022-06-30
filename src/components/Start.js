import React from 'react'

export default function Start(props) {
    return (
        <div className='start-container'>
            <h1 className='header-title'>Quizzme</h1>
            <p className='description'>Test your knowledge</p>
            <button onClick={props.handleStart} className='start-btn'>Start quiz</button>
        </div>
    )
}