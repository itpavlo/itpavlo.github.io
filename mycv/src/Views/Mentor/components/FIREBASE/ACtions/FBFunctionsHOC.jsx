import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import {collection, addDoc, onSnapshot, doc, setDoc, deleteDoc} from "firebase/firestore";
import {onAuthStateChanged, signOut} from "firebase/auth";
import db, {auth, storage} from '../../../../../firebase'
import {AppRoutes} from "../../../../../common/AppRoutes";
import {useNavigate} from "react-router-dom";
import {useEffect, useState, createContext} from "react";

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

export const FBFunctionsHOCContext = createContext(null);

const useGetInfo = (setCVState) => {
    useEffect(()=>{
        getInfo()
    },[])

    const authUser = JSON.parse(localStorage.getItem('authUser'))
    const getInfo = () => {
        const collectionRef = collection(db, authUser.uid)
        onSnapshot(collectionRef, (snapshot)=>{
            setCVState(snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))[0])
        })
    }
    return <h1>ihor</h1>
}

const FBFunctionsHOC = ({Component}) => {
    const [cvState, setCVState] = useState({})
    const [isEditMode, setIsEditMode] = useState(false)
    const navigate = useNavigate();
    const authUser = JSON.parse(localStorage.getItem('authUser'))

    // onAuthStateChanged(auth, (currentUser) => console.log(currentUser))
    // useEffect(()=>{
    //     getInfo()
    // },[])
    const name = useGetInfo(setCVState)

    console.log('name', name)
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
    //
    // const getInfo = () => {
    //     const collectionRef = collection(db, authUser.uid)
    //     onSnapshot(collectionRef, (snapshot)=>{
    //         setCVState(snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))[0])
    //     })
    // }
    const handleGIEdit = async (formValue) => {
        const docRef = doc(db, authUser.uid, cvState.id)
        try{
            const newCV = {
                myCV: {
                    ...cvState.myCV,
                    generalInfo: formValue
                }};

            await setDoc(docRef, newCV)
        }catch (e) {

        }
        setIsEditMode(false)
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

    const deleteImageFormStorage = (url) => {
        const desertRef = ref(storage, url);

        deleteObject(desertRef).then(() => {
            console.log('File deleted successfully')
        }).catch((error) => {
            console.log('error')
        });
    }

    const uploadFile = (file, handleInputChange, setUploading, setFileInfo) => {
        console.log(file)
        const storageRef = ref(storage, `/${authUser.uid}/images/${file.name}`);

        const uploadData = uploadBytesResumable(storageRef, file);



        uploadData.on('state_changed',
            (snapshot) => {
            const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100
            console.log(progress);
        },
            (err)=>  {
            console.log(err);
            setUploading(false);
            setFileInfo('')
            },
            ()=> {
                getDownloadURL(uploadData.snapshot.ref)
                    .then(url => {
                        console.log(url)
                        handleInputChange('imageUrl', url)
                        handleInputChange('imageName', file.name)


                        cvState?.myCV?.generalInfo?.imageName &&  deleteImageFormStorage(`/${authUser.uid}/images/${cvState?.myCV?.generalInfo?.imageName}`)

                        setUploading(false);
                    })
            }
        )


    }
    const context = {
        handleSignOut,
        addInfo: handleSignOut,
        cv:cvState,
        handleGeneralInfoChange,
        handleDeleteDoc,
        isEditMode,
        setIsEditMode,
        handleGIEdit,
        uploadFile
    }

    return (
        <FBFunctionsHOCContext.Provider value={context}>
            {/*{name}*/}
        <Component />
        </FBFunctionsHOCContext.Provider>
    )
}
export default FBFunctionsHOC;
