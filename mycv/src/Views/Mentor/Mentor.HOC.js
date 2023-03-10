import Mentor from "./Mentor";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import DUmbComponent from "../../components/Mentor/dumbComponent";

const MentorContainerHOC = ({Component}) => {
    const [fetchData, setFetchData] = useState([])
    const handleDelete = (index) => console.log(index)


    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character")
            .then(data => data.json())
            .then(res => setFetchData(res))
    },[])


    return (
        <>
            {Component &&
                <Component
                    users={fetchData?.results}
                    handleDelete={handleDelete}
                />}
            <DUmbComponent name={"Mariia"}/>
        </>
    )
}
export default MentorContainerHOC
