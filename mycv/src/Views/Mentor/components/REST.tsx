import React, {SetStateAction, useEffect, useState} from "react";
import axios from "axios";
import {User} from "../../../interfaces/interfaces";
import styles from './REST.module.scss';


const Container = () => {
    const [users, setUsers] = useState<User[]>([])
    const [searchValue, setSearchValue] = useState<string>('')
    const [userForDelete, setUserForDelete] = useState<User[]>([])
    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        setUserForDelete(prevState => {
            const updatedArr = prevState.filter(item => users.some(user => user.id === item.id))
            updatedArr.length === 0 && setSearchValue('')
            return updatedArr
        })
    }, [users])

    console.log('userForDelete', userForDelete)
    const getUsers = async () => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(res.data)
        } catch (e) {

        }
    }

    const handleDelete = async (id: number) => {
        try {
            const res = await axios.delete(`http://localhost:4000/api/users/${id}`)
            if (res.data?.id) {
                getUsers()
            }
        } catch (e) {

        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
        if (e.target.value !== '') {
            // setUserForDelete(users.filter(item => item?.id === parseInt(e.target.value)))
            setUserForDelete(users.filter(item => item?.id.toString().includes(e.target.value)))
            return;
        }
        setUserForDelete([])
    }


    const deleteItems = (arr: number[] = [1, 10, 5]): void => {
        setUsers(prevState => prevState.filter(item => !arr.includes(item.id)))
    }

    const generateCustomKey = (name: string, index: number):string => name+index


    return <REST
        deleteItems={deleteItems}
        handleChange={handleChange}
        searchValue={searchValue}
        userForDelete={userForDelete}
        handleDelete={handleDelete}
        users={users}
    />
}

interface Props {
    deleteItems: (a?: number[]) => void
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    searchValue: string
    userForDelete: User[]
    handleDelete: (n: number) => void
    users: User[]
    generateCustomKey?: (name: string, index: number) => string
}

const REST = ({deleteItems, handleChange, searchValue, userForDelete, handleDelete, users}: Props) => {


    return (<div>
        <h1>REST</h1>
        {/*// @ts-ignore*/}
        <button onClick={deleteItems}>Delete!!!!</button>
        <input type="text" onChange={handleChange} value={searchValue}/>

        {userForDelete?.map(item => <div >
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
            <div key={user.id + user.username} className={styles.user}>
                <p>{user.name}</p>
                <hr/>
            </div>
        ))}
    </div>)
}

export default Container;
