import Navbar from "../../components/Navbar/Navbar";
import User from "./components/User/User";

const Mentor = ({users, handleDelete}) => {

     return (
        <div>
            <Navbar />
            {users?.map((user, index) =>
                <User
                    user={user}
                    index={index}
                    key={user.id}
                    handleDelete={handleDelete}
                />
            )}
        </div>
    )
}

export default Mentor
