import Layout from "../layout/Layout";
import Header from "../layout/Header";
import { useState } from "react";
import Swal from "sweetalert2";
import "./styles.scss";

export default function Login({setIsLoggedIn}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const authenticate = () => {
        if (email !== process.env.REACT_APP_EMAIL) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Wrong credentials',
              })

            return;
        }
        if (password !== process.env.REACT_APP_PASSWORD) {
            console.log(password)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Wrong credentials',
              })

            return;
        }

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Login successful',
            showConfirmButton: false,
            timer: 2500
        })

        setIsLoggedIn(true)
    }

    return (
        <Layout>
            <Header headerTitle="Login" />

            <div className="login-wrapper" style={{textAlign: "center"}}>
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email address"/>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>
                <button onClick={authenticate}>Login</button>
            </div>
        </Layout>
    )
}