import {useEffect, useState} from "react";
import {getCharacters, getCharactersByPageNumber, getMethods, postPost} from "../../api/api";
import User from "./components/User/User";
import {Pagination} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {userActions, userActionTypes} from "../../redux/action/userActions";

const mockData = {
    title: '!!!!!title',
    body: 'bar',
    userId: 10
}

const AxiosRedux = () => {
    const dispatch = useDispatch();
    const results = useSelector( store => store.usersReducer.characters)
    const info = useSelector( store => store.usersReducer.info)
// const [info, setInfo] = useState({})
const [activePage, setActivePage] = useState(1)
// const [results, setResults] = useState([])


    useEffect(()=>{
        // activePage === 1 ?  getData() : setNewPAgeData()
        getCharacters();
        postPost(mockData)
    },[activePage])

    const getCharacters = async () => {
        try{
            const res = await getMethods.universalGetCharacters(activePage)
            // dispatch(userActions.setUsers(res.data.results))
            dispatch({type: userActionTypes.SET_CHARACTERS, users: res.data.results})
            dispatch(userActions.setInfo(res.data.info))
            // setInfo(res.data.info)
            // setResults(res.data.results)
        } catch (e) {

        }
    }

    // const setNewPAgeData = async () => {
    //     try{
    //         const res = await getMethods.getCharactersByPageNumber(activePage)
    //         setInfo(res.data.info)
    //         setResults(res.data.results)
    //     } catch (e) {
    //
    //     }
    // }
    // const getData = async () => {
    //     try{
    //         const res = await getMethods.getCharacters()
    //         setInfo(res.data.info)
    //         setResults(res.data.results)
    //     }
    //     catch(e){
    //
    //     }
    // }

    return(
        <div>
            <Pagination
                prev
                last
                next
                first
                size="lg"
                total={info?.count}
                limit={20}
                activePage={activePage}
                onChangePage={setActivePage}
                maxButtons={10}
            />
            <h1>Axios Redux</h1>
            {results?.map(item => <User user={item} key={item.id}/>)}
        </div>
    )
}
export default AxiosRedux
