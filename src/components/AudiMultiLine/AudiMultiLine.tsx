import './AudiMultiLine.css'

export default function AudiMultiLine(){
    return(
        <div className="AudiMultiLineContainer">
            <textarea name="MultiLine" id="MultiLine" cols={30} rows={3} className='AudiMultiLineTextArea' placeholder=' '></textarea>
            <label htmlFor="MultiLine" className='AudiMultiLineLabel'>Label</label>
        </div>
    )
}