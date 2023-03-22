import { useEffect, useState } from "react";
import axios from "axios";

const REST = () => {
    const [ users, setUsers ] = useState([])
    const [ searchValue, setSearchValue ] = useState('')
    const [ userForDelete, setUserForDelete ] = useState([])
    useEffect(() => {
        getUsers()
    }, [])

    useEffect(()=>{
        setUserForDelete(prevState => {
            const updatedArr = prevState.filter(item => users.some(user => user.id === item.id))
            updatedArr.length === 0 && setSearchValue('')
            return updatedArr
        })
    },[users])

    console.log('userForDelete',userForDelete)
    const getUsers = async () => {
        try {
            const res = await axios.get('http://localhost:4000/api/users')
            setUsers(res.data)
        } catch (e) {

        }
    }

    const handleDelete = async(id) =>{
        try {
            const res = await axios.delete(`http://localhost:4000/api/users/${id}`)
            if(res.data?.id){
                getUsers()
            }
        } catch (e) {

        }
    }

    const handleChange = (e) => {
        setSearchValue(e.target.value)
        if(e.target.value !=='')  {
            // setUserForDelete(users.filter(item => item?.id === parseInt(e.target.value)))
            setUserForDelete(users.filter(item => item?.id.toString().includes(e.target.value)))
            return;
        }
        setUserForDelete([])
    }

    console.log(users.filter(item => item))


    const deleteItems = (arr = [1,10,5]) =>{
        setUsers(prevState => prevState.filter(item => ![1,10,5].includes(item.id)))
    }

    return (<div>
        <h1>REST</h1>
        <button onClick={deleteItems}>Delete!!!!</button>
        <input type="text" onChange={handleChange} value={searchValue}/>

        {userForDelete?.map( item => <div>
            <p>ID - {item.id} - {item.name}</p>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <hr/>
            <br/>
            <br/>
            <br/>
        </div>)}
        <br/>
        <br/>
        {/*{users?.filter(item => item?.name.toLowerCase()?.includes(searchValue?.toLowerCase())).map(user => (*/}
        {users?.map(user => (
            <div key={user.id+user.username}>
                <p>{user.name}</p>

                <hr/>
            </div>
        ))}
    </div>)
}

export default REST;
