import {collection, addDoc, onSnapshot, doc, setDoc, deleteDoc} from "firebase/firestore";
import db from '../../../../../firebase'

const FBFunctions = ({handleSignOut, addInfo, cv, handleGeneralInfoChange, handleDeleteDoc}) => {

    return (
        <div>
            <p>{cv?.myCV?.generalInfo?.fullName}</p>
                <button type='button' onClick={addInfo}>Add info</button>
                <button type='button' onClick={handleSignOut}>Sign Out</button>
                <button type='button' onClick={handleGeneralInfoChange}>handleNAmeChange</button>
                <button type='button' onClick={handleDeleteDoc}>handleDeleteDoc</button>
        </div>
    )
}
export default FBFunctions;
