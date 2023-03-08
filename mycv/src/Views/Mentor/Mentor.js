import Navbar from "../../components/Navbar/Navbar";

const Mentor = ({data, handleClick}) => {
     return (
        <div>
            <Navbar />
            <h1 onClick={handleClick}>{data[0].name}</h1>
        </div>
    )
}

export default Mentor
