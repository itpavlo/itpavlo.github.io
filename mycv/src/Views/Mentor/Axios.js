import {useEffect, useState} from "react";
import {getCharacters, getCharactersByPageNumber, getMethods, postPost} from "../../api/api";
import User from "./components/User/User";
import {Pagination} from "rsuite";

const mockData = {
    title: '!!!!!title',
    body: 'bar',
    userId: 10
}

const AxiosComp = () => {
const [info, setInfo] = useState({})
const [activePage, setActivePage] = useState(1)
const [results, setResults] = useState([])


    useEffect(()=>{
        activePage === 1 ?  getData() : setNewPAgeData()
        postPost(mockData)
    },[activePage])


    const setNewPAgeData = async () => {
        try{
            const res = await getMethods.getCharactersByPageNumber(activePage)
            setInfo(res.data.info)
            setResults(res.data.results)
        } catch (e) {

        }
    }
    const getData = async () => {
        try{
            const res = await getMethods.getCharacters()
            setInfo(res.data.info)
            setResults(res.data.results)
        }
        catch(e){

        }
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
            <h1>Axios</h1>
            {results?.map(item => <User user={item} key={item.id}/>)}
            <Pagination
                prev
                last
                next
                first
                size="xs"
                total={info?.count}
                limit={20}
                activePage={activePage}
                onChangePage={setActivePage}
                maxButtons={10}
            />
        </div>
    )
}
export default AxiosComp
