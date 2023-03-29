import {useState} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../../../../firebase";
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../../../../../common/AppRoutes";

const SignUP = () => {
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

    const handleSignUp = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, formValue.email, formValue.password)
            // localStorage.setItem('authUser', JSON.stringify(user.user))
            user?.user?.uid && navigate(AppRoutes.MENTOR_LOGIN)
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <div>
            <>
                <h1>SIGN UP</h1>
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
                <button onClick={handleSignUp}>Sign UP</button>
            </>
        </div>
    )
}
export default SignUP;
