import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'
import './Loading.css'

function Loading() {
    return (
        <div className='loader'>
            <ThreeCircles
                color="red"
                outerCircleColor="blue"
                middleCircleColor="green"
                innerCircleColor="grey"
            />
        </div>
    )
}

export default Loading