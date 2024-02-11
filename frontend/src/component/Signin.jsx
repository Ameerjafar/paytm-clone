import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
export function Signin({ setUserId, setreDirect}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const sumbit = async () => {
        const response = await axios.post('http://localhost:3000/api/v1/user/signin', {
            username: email,
            password: password
        });
        setUserId(response.data.message);
        console.log(response.data.message);
        setreDirect(true);
        navigate('/dashboard');        
    }
    const handleChange = (events) => {
        setEmail(events.target.value);
        console.log(events.target.value);
    }
    const handleChangePassword = (events) => {
        setPassword(events.target.value);
        console.log(events.target.value);
    }
    return (
        <div className = "h-screen flex items-center justify-center text-color bg-gray-500">
            <div className = "bg-white rounded-lg p-5">
                <div className = 'flex justify-center p-3'>
                    <h1 className = 'text-2xl font-bold'>SIGN IN</h1>
                </div>
                <h2>Enter your information to signin an account</h2>
                <h3 className="font-bold py-2">Email</h3>
                <input className="border-2 rounded-lg w-full" type = "text" placeholder = "example@gmail.com" onChange = {(events) => {
                    handleChange(events);
                }}></input>
                <h3 className="font-bold py-2">Password</h3>
                <input className="border-2 rounded-lg w-full" type = "password" onChange={(events) => {
                    handleChangePassword(events);
                }}></input><br></br>
                <div className = 'flex items-center justify-center'>
                    <button onClick = {sumbit} className = "m-3 justify-center bg-black text-white rounded-lg p-2">submit</button>
                </div>
                <div className = 'text-center'>
                    <a className = 'font-bold' href = 'http://localhost:5173/signup'>create new account</a>
                </div>
            </div>
        </div>
    )
}