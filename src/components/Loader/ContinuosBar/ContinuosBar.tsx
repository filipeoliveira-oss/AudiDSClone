import { useEffect, useState } from 'react';
import './ContinuosBar.css'


export default function ContinuosBar(){

    const [barWidth, setBarWidth] = useState(0)

    const startInterval = () => {
        const duration = 2000;
        const maxVal = 100;
        const intervalTime = duration / maxVal;
        let currentValue = 0;

        const intervalId = setInterval(() => {
            if (currentValue > maxVal) {
                clearInterval(intervalId);
                setTimeout(() => {
                    startInterval(); 
                }, 500); 
            } else {
                setBarWidth(currentValue);
                currentValue++;
            }
        }, intervalTime);

        return () => clearInterval(intervalId);
    };

    useEffect(() => {
        startInterval(); 
    }, []); 


    return(
        <div className="ContinuosBarContainer">
            <div className='ContinuosBarLoaded' style={{ width:`${barWidth}%`}}></div>
        </div>
    )
}