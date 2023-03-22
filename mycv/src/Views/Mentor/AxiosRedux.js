import {createContext, useContext, useEffect, useState} from "react";
import User from "./components/User/User";
import {Pagination} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
// import {getCharacters, userActions, userActionTypes} from "../../redux/action/userActions";
import ContextComponent from "./components/ContextComponent";
import {getMethods} from "../../api/api";
const mockData = {
    title: '!!!!!title',
    body: 'bar',
    userId: 10
}
export const RMContext = createContext(null)

const AxiosRedux = () => {
    const dispatch = useDispatch();
    // const results = useSelector( store => store.usersReducer.characters)
    // const info = useSelector( store => store.usersReducer.info)
    const [activePage, setActivePage] = useState(1)
    const [users, setUsers] = useState([])
    const [info, setInfo] = useState({})
    // const _getCharacters = (activePage) => dispatch(getCharacters(activePage))


    useEffect(()=>{
        // _getCharacters();
        getCharacters();
        // postPost(mockData)
    },[activePage])

    const getCharacters = async () => {
        try{
            const res = await getMethods.universalGetCharacters(activePage)
            setUsers(res.data.results)
            setInfo(res.data.info)
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
const context = {
    results: users,
    info: info,
    setUsers
}
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
            {/*{results?.map(item => <User user={item} key={item.id}/>)}*/}
            <RMContext.Provider value={context}>
                <ContextComponent />
            </RMContext.Provider>
        </div>
    )
}
export default AxiosRedux
