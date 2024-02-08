import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export function Signup() {
    const [firstName, setfirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const sumbit = async () => {
        const response = await axios.post('http://localhost:3000/api/v1/user/signup', {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName
        });
        console.log(response.data);
        navigate('/dashboard');
    }
    const firstHandler = (events) => {
        setfirstName(events.target.value);
    }
    const secondHandler = (events) => {
        setLastName(events.target.value);
    }
    const emailHandler = (events) => {
        setUserName(events.target.value);
    }
    const passwordHandler = (events) => {
        setPassword(events.target.value);
    }
    return (
        <div className = "h-screen flex items-center justify-center text-color bg-gray-500">
            <div className = "bg-white rounded-lg p-5">
                <div className = 'flex justify-center p-3'>
                    <h1 className = 'text-2xl font-bold'>SIGN UP</h1>
                </div>
                <h2>Enter your information to create an account</h2>
                <h3 className="font-bold py-2">FirstName</h3>
                <input className="border-2 rounded-lg w-full" type = "text" placeholder = "John" onChange = {(events) => firstHandler(events)}></input>
                <h3 className="font-bold py-2">LastName</h3>
                <input className="border-2 rounded-lg w-full" type = "text" placeholder = "Doe" onChange = {(events) => secondHandler(events)}></input>
                <h3 className="font-bold py-2">Email</h3>
                <input className="border-2 rounded-lg w-full" type = "text" placeholder = "example@gmail.com" onChange = {(events) => emailHandler(events)}></input>
                <h3 className="font-bold py-2">Password</h3>
                <input className="border-2 rounded-lg w-full" type = "password" onChange = {(events) => passwordHandler(events)}></input><br></br>
                <div className = 'flex items-center justify-center'>
                <button className = "m-3 justify-center bg-black text-white rounded-lg p-2" onClick = { sumbit }>submit</button>
                </div>
            </div>
        </div>
    )
}