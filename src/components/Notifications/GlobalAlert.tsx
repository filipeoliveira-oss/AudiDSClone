import { useState } from 'react'
import AudiButton from '../AudiButton/AudiButton'
import './GlobalAlert.css'

interface globalAlertInterface{
    buttonText: string,
    confirmButtonText: string,
    cancelButtonText: string,
    text: React.ReactNode
}

export default function GlobalAlert({buttonText, confirmButtonText, cancelButtonText, text} : globalAlertInterface){
    const [show, setShow] = useState(false)
    const [isClosing, setIsClosing] = useState(false)


    function handleHide(){
        setIsClosing(true)
        setTimeout(() =>{
            setShow(false)
        },500)
    }

    function handleOpen(){
        setShow(true)
        setIsClosing(false)
    }


    return(
        <div className="GlobalAlertContainer" >
            <AudiButton buttonType='primary' click={() => handleOpen()} text={buttonText}/>
            <div className={`${show ? 'GlobalAlertPopUp' : 'popUpClosed'} ${isClosing ? 'popUpClosing' : ''}`}>
                {text}
                <div className='GlobalAlertPopUpActions '>
                    <AudiButton buttonType='primary' text={confirmButtonText} click={() => handleHide()}/>
                    <AudiButton buttonType='secondary' text={cancelButtonText} click={() => handleHide()}/>
                </div>
            </div>
        </div>
    )
}