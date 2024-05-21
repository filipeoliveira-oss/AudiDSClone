import './ProgressBar.css'
import { useState, useEffect } from 'react'

interface ProgressBarInterface{
    loadtime: number
}

export default function ProgressBar({loadtime}: ProgressBarInterface){
    const [curr, setCurr] = useState(0)

    useEffect(() =>{
        const maxVal = 100
        const intervalTime = loadtime / maxVal;
        let currentValue = 0

        const intervalId = setInterval(() =>{
            if(currentValue > maxVal){
                clearInterval(intervalId)
            }else{
                setCurr(currentValue)
                currentValue++
            }
        }, intervalTime)

        return () => clearInterval(intervalId)
    },[])


    return(
        <div className="ProgressBarContainer">
            <div className='ProgressBarLoaded' style={{width:`${curr}%`}}></div>
        </div>
    )
}