import './ProgressBar.css'
import { useState, useEffect } from 'react'

interface ProgressBarInterface{
    loadtime: number,
    inLoop?:Boolean
}

export default function ProgressBar({loadtime,inLoop}: ProgressBarInterface){
    const [curr, setCurr] = useState(0)

    const intervalLoad = () =>{
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
    } 


    useEffect(() =>{
       intervalLoad()

       if(inLoop){
        setInterval(() =>{
            intervalLoad()
        },loadtime + 3000)
       }
    },[])


    return(
        <div className="ProgressBarContainer">
            <div className='ProgressBarLoaded' style={{width:`${curr}%`}}></div>
        </div>
    )
}