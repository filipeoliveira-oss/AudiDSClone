import { useState } from 'react'
import AudiButton from '../../AudiButton/AudiButton'
import './Toast.css'

interface toastInterface{
    buttonType: 'primary' | 'secondary',
    buttonText:string,
    toastText:string,
    toastTheme:'dark' | 'light',
    duration?:number
}

export default function Toast({buttonText,buttonType,toastText,toastTheme,duration} :toastInterface){
    const[showToast, setShowToast] = useState(false)
    const[isClosing, setIsClosing] = useState(false)


    function handleOpen(){
        setShowToast(true)
        setIsClosing(false)

        if(duration){
            setTimeout(() => {
                setIsClosing(true)
                setTimeout(() => {
                    setShowToast(false)
                }, 500);
            }, duration);
        }
    }

    function handleClose(){
        setIsClosing(true)
        setTimeout(() => {
            setShowToast(false)
        },500);
    }

    return(
        <div className="ToastContainer">
            <AudiButton buttonType={buttonType} text={buttonText} click={() => handleOpen()}/>
            <div className={`${showToast ? 'Toast' : 'closedToast'} ${isClosing ? 'ToastClosing': ''} toast-theme-${toastTheme}`}>
                <span className='ToastText'>{toastText}</span>
                <span className='ToastClose' onClick={() => handleClose()}>X</span>
            </div>
        </div>
    )
}