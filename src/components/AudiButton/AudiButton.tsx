import './AudiButton.css'
import github from '../../stories/assets/github.svg'

interface AudiButtonInterface{
    buttonType: 'primary' | 'secondary' | 'text' | 'stretched',
    text?: string,
    showIcon?: boolean,
}

export const AudiButton = ({
    buttonType,
    text,
    showIcon
} : AudiButtonInterface) =>{
    return(
        <button
        type='button'
        className={` ${showIcon ? 'AudiButtonIcon' : `AudiButton AudiButton-${buttonType}`} `}
        >
            {showIcon ? 
                <span className='buttonIconWrapper'>
                    <img src={github} alt="Git Hub icon" />
                </span>
            :
                <>
                    <span>{text? text: `${buttonType} Button`}</span>
                    {buttonType == 'text' && <span>&gt;</span> } 
                </>
                
            }
        </button>
    )
}

export default AudiButton