import {collection, addDoc, onSnapshot, doc, setDoc, deleteDoc} from "firebase/firestore";
import db from '../../../../../firebase'
import {useState} from "react";
import { Uploader, Message, Loader, useToaster } from 'rsuite';
import AvatarIcon from '@rsuite/icons/legacy/Avatar';

const DemoComponent = ({cv}) => {
    return (
        <div>
            {cv?.myCV?.generalInfo?.imageUrl && <img style={{height: '50px'}} src={cv?.myCV?.generalInfo?.imageUrl} alt=""/>}
            <p>{cv?.myCV?.generalInfo?.fullName}</p>
            <p>{cv?.myCV?.generalInfo?.position}</p>
            <p>{cv?.myCV?.generalInfo?.summary}</p>
        </div>
)
}

const EditComponent = ({cv, handleGIEdit, uploadFile}) => {
    const [formValue, setFormValue] = useState(cv.myCV.generalInfo)
    const [uploading, setUploading] = useState(false);
    const [fileInfo, setFileInfo] = useState('');

    const previewFile = (file, callback) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            callback(reader.result);
        };
        reader.readAsDataURL(file);
    }

    const handleInputChange = (key, value) =>{
        setFormValue((prevState) => {
            return {
                ...prevState,
                [key]: value
            }
        })
    }
    return (
        <div>
            <Uploader
                fileListVisible={false}
                autoUpload={false}
                listType="picture"
                action=""
                multiple={false}
                onChange={file => {
                    setUploading(true);
                    console.log(file)
                    previewFile(file[file.length-1].blobFile, value => {
                        setFileInfo(value);
                        uploadFile(file[file.length-1].blobFile, handleInputChange, setUploading, setFileInfo)
                    });
                }}
            >
                <button style={{ width: 150, height: 150 }}>
                    {uploading && <Loader backdrop center />}
                    {fileInfo ? (
                        <img src={fileInfo} width="100%" height="100%" />
                    ) : formValue?.imageUrl ?
                        (
                            <img src={formValue?.imageUrl} width="100%" height="100%" />
                        )
                        : (
                        <AvatarIcon style={{ fontSize: 80 }} />
                    )}
                </button>
            </Uploader>
            <input
                type="text"
                value={formValue?.fullName}
                onChange={(e)=> handleInputChange('fullName', e.target.value)}
            />
            <input
                type="text"
                value={formValue?.position}
                onChange={(e)=> handleInputChange('position', e.target.value)}
            />
            <textarea
                value={formValue?.summary}
                onChange={(e)=> handleInputChange('summary', e.target.value)}
            />
            <button type='button' onClick={()=>handleGIEdit(formValue)}>Save general info</button>
        </div>
    )
}

const FBFunctions = ({handleSignOut, uploadFile, addInfo, cv, handleGeneralInfoChange, handleDeleteDoc, isEditMode, setIsEditMode, handleGIEdit}) => {

    console.log(cv)
    return (
        <div>
            <button onClick={()=>setIsEditMode((prevState) => !prevState)}>{isEditMode ? 'Save' : 'Edit'}</button>
            {isEditMode
                ? <EditComponent cv={cv} handleGIEdit={handleGIEdit} uploadFile={uploadFile}/>
                : <DemoComponent cv={cv}/>
            }

            <br/>
            <br/>
            <br/>
            <hr/>

            <button type='button' onClick={addInfo}>Add info</button>
            <button type='button' onClick={handleSignOut}>Sign Out</button>
            <button type='button' onClick={handleGeneralInfoChange}>handleNAmeChange</button>
            <button type='button' onClick={handleDeleteDoc}>handleDeleteDoc</button>
        </div>
    )
}
export default FBFunctions;
