import User from "./User/User";
import {useContext} from "react";
import {RMContext} from "../AxiosRedux";

const ContextComponent =()=>{
const { results, info, setUsers } = useContext(RMContext)

    console.log(info)
    return(
        <>
            {results?.map(item => <User user={item} key={item.id}/>)}
        </>
    )
}
export default ContextComponent
