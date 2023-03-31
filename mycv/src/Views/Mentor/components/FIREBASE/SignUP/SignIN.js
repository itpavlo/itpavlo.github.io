import {useState} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../../../../firebase";
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../../../../common/AppRoutes";

const SignIN = () => {
    const navigate = useNavigate();
    const [formValue, setFormValue] = useState({
        email: "",
        password: ""
    })


    const handleChange = (event, key) => {
        setFormValue({
            ...formValue,
            [key]: event.target.value
        })
    }

    const handleSignIN = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, formValue.email, formValue.password)
            localStorage.setItem('authUser', JSON.stringify(response.user))
            response?.user?.uid && navigate(`/users/${response.user.uid}`)
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <div>
            <>
                <h1>SIGN IN</h1>
                <form action="">
                    <label htmlFor=""> Email</label>
                    <input
                        type="email"
                        value={formValue.email}
                        onChange={(event) => handleChange(event, "email")}
                    />
                    <label htmlFor=""> Password</label>
                    <input
                        type="password"
                        value={formValue.password}
                        onChange={(event) => handleChange(event, "password")}
                    />
                </form>
                <button onClick={handleSignIN}>Sign UP</button>
            </>
        </div>
    )
}
export default SignIN;
