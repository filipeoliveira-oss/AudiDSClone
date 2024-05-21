import './AudiDropZone.css'
import {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import close from '../../../stories/assets/close.svg'

// interface fileInterface{
//     path:string,
//     preview:string,
//     lastModified: EpochTimeStamp,
//     lastModifiedDate: Date
//     name:string,
//     size:number,
//     type: string,
//     webkitRelativePath:string
// }

export const AudiDropZone = () =>{

    const [files, setFiles] = useState<any>([])
    const [rejected, setRejected]= useState<any>([])


    const onDrop = useCallback((acceptedFiles:any, rejectedFiles:any) => {
        console.log(acceptedFiles)
        if(acceptedFiles?.length){
            setFiles((prev:any) => [
                ...prev,
                ...acceptedFiles.map((file:any) =>
                    Object.assign(file, {preview: URL.createObjectURL(file)})
                )
            ])
        }

        if(rejectedFiles?.length){
            setRejected((prev:any) => [...prev, ...rejectedFiles])
            console.log(rejectedFiles)
        }
    }, [])


    const {getRootProps, getInputProps} = useDropzone({onDrop, accept:{
        'image/*':[]
        },
        maxSize: 1024 * 5000,
    })
    
    const removeFile = (name:string) =>{
        setFiles((files:any) => files.filter((file:any) => file.name !== name) )
    }

    const removeRejected = (name:string) =>{
        setRejected((files:any) => files.filter(({file}:any) => file.name !== name))
    }

    return (
    <div className='AudiDropzoneWrapper'>
        <form >
            <div {...getRootProps({
            className: 'AudiDropzoneDragger'
            })} >
                <input {...getInputProps()} />
                <p>Drop Here</p>
            </div>
        </form>

        <div className='AudiDropzoneFiles'>
            <p>Accepted Files</p>

            <ul className='AudiDropzoneAcceptedUl'>
                {files.map((file:any) =>{
                    return(
                        <li className='AudiDropzoneAcceptedLi'>
                            <img src={file.preview} alt={file.name} className='AudiDropzoneAcceptedImg'/>
                            <button className='AudiDropzoneAcceptedBtn' onClick={() => removeFile(file.name)}>
                                <img src={close} alt='Remove file'/>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>

        <div className='AudiDropzoneFiles'>
            <p>Rejected Files</p>

            <ul className='AudiDropzoneRejectedUl'>
                {rejected.map((file:any) =>{
                    return(
                        <li className='AudiDropzoneRejectedLi'>
                            <p className='AudiDropzoneRejectedLiName'>{`${file.file.name.substring(0, 15)}...`}</p>
                            {file.errors.map((error:any) =>{
                                return(
                                    <p className='AudiDropzoneRejectedLiError'>{error.message}</p>
                                )
                            })}
                            <button className='AudiDropzoneRejectedLiRemove' onClick={() => removeRejected(file.file.name)}>Remove File</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
    )
}

export default AudiDropZone