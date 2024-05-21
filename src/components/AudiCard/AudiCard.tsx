import React, { ReactNode } from 'react'
import './AudiCard.css'

interface AudiCardInterface{
    headline: string,
    text:React.ReactNode,
    footer?: ReactNode,
    background?:  string,
    fontColor?: string
}

export const AudiCard = ({
    headline ,
    text,
    footer,
    background,
    fontColor
} : AudiCardInterface) =>{


    const style ={
        backgroundColor:background,
        color: fontColor
    }


    return(
        <div className='AudiCard' style={background ? style : {}}>
            <h2>{headline}</h2>
            <p>{text}</p>
            {footer && 
                <div className='AudiCardInteractions'>
                    {footer}
                </div>
            }
        </div>
    )
}