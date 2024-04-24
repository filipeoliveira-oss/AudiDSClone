import './AudiLabel.css'
import searchIcon from '../../stories/assets/search.svg'

interface AudiLabelInterface{
    label:string,
    placeholder:string,
    optional?:boolean,
    search?:boolean
}

export const AudiLabel = ({
    label,
    placeholder,
    optional,
    search
} : AudiLabelInterface) =>{
    return(
        <div className='AudiLabelWrapper'>
            {search ? 
                <>
                    <div className='AudiLabelSearch'>
                        <img src={searchIcon} alt="Search Icon" className='AudiLabelSearchImg'/>
                        <div className='AudiLabelSearchInputWrapper'>
                            <input type="text" name="input" id="input" className='AudiLabelSearchInput' placeholder=' '/>
                            <label htmlFor="input" className='AudiLabelSearchLabel'>{label}</label>
                        </div>
                    </div>
                    <span className='AudiLabelAuxLine'></span>
                    <p className='AudiLabelPlaceholder'>{placeholder}</p>
                </>
            :
                <>
                    <input type='text' className='AudiLabelInput' id='input' placeholder=' '/>
                    <label htmlFor="input" className='AudiLabelLabel'>{`${label} ${optional ? '(optional)' : ''}`}</label>
                    <span className='AudiLabelAuxLine'></span>
                    <p className='AudiLabelPlaceholder'>{placeholder}</p>
                </>
            }
        </div>
    )
}

export default AudiLabel