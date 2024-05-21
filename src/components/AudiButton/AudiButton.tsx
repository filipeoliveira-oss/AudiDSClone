import './AudiButton.css'
import github from '../../stories/assets/github.svg'
import { useState } from 'react'

interface AudiButtonInterface{
    buttonType: 'primary' | 'secondary' | 'text' | 'stretched',
    text?: string,
    showIcon?: boolean,
    click?: () => void
}

export const AudiButton = ({
    buttonType,
    text,
    showIcon,
    click
} : AudiButtonInterface) =>{


    const [x, setx] = useState(0)
    const [y, sety] = useState(0)

    function clickbt(e:any){
        let target = e.currentTarget || e.srcElement
        let rect = target.getBoundingClientRect(),
        offsetX = e.clientX - rect.left,
        offsetY = e.clientY - rect.top,
        el = document.getElementById('buttonResponse')

        setx(offsetX)
        sety(offsetY)
        el?.classList.remove('responseButtonEffect-disabled')
        el?.classList.add('responseButtonEffect-active')

        setTimeout(() => {
            el?.classList.remove('responseButtonEffect-active')
            el?.classList.add('responseButtonEffect-disabled')
        }, 500);

    }

    return(
        <>
            <button
            type='button'
            className={` ${showIcon ? 'AudiButtonIcon' : `AudiButton AudiButton-${buttonType}`} `}
            onClick={(e) => clickbt(e)}
            
            >
                {showIcon ? 
                    <span className='buttonIconWrapper'>
                        <img src={github} alt="Git Hub icon" />
                    </span>
                :
                    <>
                        <span>{text? text: `${buttonType} Button`}</span>
                        {buttonType == 'text' && <span className='buttonTextArrow'>&gt;</span> } 
                    </>
                    
                }
            <div className='responseButtonEffect-disabled'  style={{top:`${y}px`, left:`${x}px`}} id='buttonResponse'></div>
            </button>
        </>
        
    )
}

export default AudiButton