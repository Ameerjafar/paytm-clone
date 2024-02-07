import { useNavigate } from "react-router-dom"

export function Signin() {
    const navigate = useNavigate();
    const sumbit = () => {
        navigate('/dashboard');
    }
    return (
        <div className = "h-screen flex items-center justify-center text-color bg-gray-500">
            <div className = "bg-white rounded-lg p-5">
                <div className = 'flex justify-center p-3'>
                    <h1 className = 'text-2xl font-bold'>SIGN IN</h1>
                </div>
                <h2>Enter your information to signin an account</h2>
                <h3 className="font-bold py-2">Email</h3>
                <input className="border-2 rounded-lg w-full" type = "text" placeholder = "example@gmail.com"></input>
                <h3 className="font-bold py-2">Password</h3>
                <input className="border-2 rounded-lg w-full" type = "password"></input><br></br>
                <div className = 'flex items-center justify-center'>
                <button onClick = {sumbit} className = "m-3 justify-center bg-black text-white rounded-lg p-2">submit</button>
                </div>
            </div>
        </div>
    )
}