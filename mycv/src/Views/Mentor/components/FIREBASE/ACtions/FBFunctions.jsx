import {collection, addDoc, onSnapshot, doc, setDoc, deleteDoc} from "firebase/firestore";
import db from '../../../../../firebase'

const FBFunctions = () => {
    const authUser = JSON.parse(localStorage.getItem('authUser'))

    console.log(authUser)
    //addInfo to firebase
    const addInfo = async () => {
    // create reference to db
    const collectionRef = collection(db, authUser.uid)
    const docRef =  await addDoc(collectionRef, {myPersonalInfo: {name: 'Ihor', role: 'mentor'}})
        docRef?.id && console.log(docRef)
    }

    return (
        <div>
            <>
                <button type='button' onClick={addInfo}>Add info</button>
            </>
        </div>
    )
}
export default FBFunctions;
