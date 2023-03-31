import {collection, addDoc, onSnapshot, doc, setDoc, deleteDoc} from "firebase/firestore";
import {onAuthStateChanged, signOut} from "firebase/auth";
import db, {auth} from '../../../../../firebase'
import {AppRoutes} from "../../../../../common/AppRoutes";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const mockData = {
    myCV: {
        generalInfo:{
            fullName: "NEEEEE Ihor Kurylov",
            position: 'React Developer',
            summary: "lorem",
            imageUrl: ''
        },
        languages:[
            {
                name: 'Ukrainian',
                level: 'native speaker'
            },
            {
                name: 'English',
                level: 'Upper Intermediate Strong'
            }
        ],
        hardSkills: [
            'HTML5', 'CSS3','JavaScript (ES5, ES6)',
        ],
        softSkills: [
            'punctual', 'outgoing person'
        ],
        contacts: {
            email: 'linkedin.url',
            skype: 'skype name',
            linkedin: 'linkedin.url',
            github: 'github.url'
        }
    }
}
const FBFunctionsHOC = ({Component}) => {
    const [cvState, setCVState] = useState({})
    const navigate = useNavigate();
    const authUser = JSON.parse(localStorage.getItem('authUser'))

    // onAuthStateChanged(auth, (currentUser) => console.log(currentUser))
    useEffect(()=>{
        getInfo()
    },[])

    console.log('cvState', cvState)
    const handleSignOut = async () => {
        try{
            await signOut(auth);
            localStorage.removeItem('authUser')
            navigate(AppRoutes.MAIN)
        } catch (e) {

        }
    }
    //
    // addInfo to firebase
    const addInfo = async () => {
    // create reference to db
    const collectionRef = collection(db, authUser.uid)
    const docRef =  await addDoc(collectionRef, mockData)
        docRef?.id && console.log(docRef)
    }

    const getInfo = () => {
        const collectionRef = collection(db, authUser.uid)
        onSnapshot(collectionRef, (snapshot)=>{
            setCVState(snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))[0])
        })
    }

    //edit FB data
    const handleGeneralInfoChange = async ()=> {
        const newCV = {
            myCV: {
                ...cvState.myCV,
                generalInfo: {
                    fullName: "Ihor Kurylov",
                    position: 'SUPER React Developer',
                    summary: "lorem ipsum",
                    imageUrl: 'affafasf'
                }
            }
        }
        const docRef = doc(db, authUser.uid, cvState.id)
        try{
            await setDoc(docRef, newCV)
        }catch (e) {

        }
    }


    const handleDeleteDoc = async () => {
        const docRef = doc(db, authUser.uid, cvState.id)
        try{
            const response = await deleteDoc(docRef)
            console.log(response)
        }catch (e) {

        }
    }

    return (
        <Component
            handleSignOut={handleSignOut}
            addInfo={addInfo}
            cv={cvState}
            handleGeneralInfoChange={handleGeneralInfoChange}
            handleDeleteDoc={handleDeleteDoc}
        />
    )
}
export default FBFunctionsHOC;
