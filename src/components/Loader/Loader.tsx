
import "./Loader.css";
import { useEffect, useState } from "react";

interface loaderInterface{
    loadTime: number,
    inLoop?:Boolean
}


export default function Loader({loadTime, inLoop} : loaderInterface) {

    const [ loaded, setLoaded] = useState<number>(0)
    const [loadPercent, setLoadPercent] = useState(0)

    const intervalLoad = () =>{
        const maxVal = 280;
        const intervalTime = loadTime / maxVal;
        let currentValue = 0;

        const intervalId = setInterval(() =>{
            if(currentValue > maxVal){
                clearInterval(intervalId)
            }else{
                setLoaded(currentValue)
                currentValue++
            }
        },intervalTime)
    }

    useEffect(() =>{
        intervalLoad()

        if(inLoop){
            setInterval(() =>{
                intervalLoad()
            },loadTime + 3000)
        }
    },[])

    useEffect(() =>{
        setLoadPercent(Math.floor((100 * loaded) / 280))
    },[loaded])

    return (
        <div className="LoaderContainer">
            <svg className="aui-spinner__svg" viewBox="-46 -46 92 92">

                <g className="aui-spinner__group" style={{strokeOpacity:1,strokeWidth:'4px', strokeDasharray: '300, 279.602', fill:'none',stroke:'#E0E0E0'}}>
                    <g className="aui-spinner__group-base">
                        <circle
                            className="aui-spinner__path"
                            cx="0"
                            cy="0"
                            r="44.5"
                        ></circle>
                    </g>
                    {/* inner */}
                    <g className="aui-spinner__group-progress">
                        <circle
                            className="aui-spinner__path aui-spinner__path--progress"
                            cx="0"
                            cy="0"
                            r="44.5"
                            transform="rotate(-90)"
                            style={{strokeOpacity:1, strokeDasharray: `${loaded}, 279.602`, stroke:'#f50537', strokeWidth:'4px', fill:'none'}}
                        ></circle>
                    </g>
                </g>
            </svg>

            <h3 className="LoaderPercent">{loadPercent}%</h3>
        </div>
    );
}
