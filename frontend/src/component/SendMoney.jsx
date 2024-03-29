import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export function SendMoney({ userId, toId }) {
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate('');
    const transfer = async () => {
        console.log(amount);
        const response = await axios.post('http://localhost:3000/api/v1/account/transfer', {
            userId: userId,
            toId: toId,
            amount: parseInt(amount)
        });
        navigate('/dashboard');
    }
    const money = (events) => {
        setAmount(events.target.value);
    }
    console.log(toId);
    console.log(userId);
    return (
        <div className = 'h-screen flex items-center justify-center text-color bg-gray-400'>
            <div className = 'bg-white rounded-lg w-96 h-80'>
                <div className = ''>
                    <h1 className = 'text-2xl font-bold p-10 text-center'>Send Money</h1>
                </div>
                <div className = 'flex p-5 pb-0 gap-2'>
                    <p className = 'w-12 h-12 rounded-full bg-green-500 flex items-center justify-center'>A</p>
                    <p className = 'font-bold text-2xl'>Ameer jafar</p>
                </div>
                <div className = 'font-medium pl-10'>Amount (in Rs)</div>
                <div className = 'pl-10 pr-10 pb-5'>
                    <input onChange = {(events) => money(events)} className = 'border-2 w-full h-8 rounded-lg' type = 'text' placeholder = 'Enter amount'></input>
                </div>
                <div className = 'pr-10 pl-10 pb-2'>
                    <button onClick = {transfer} className = 'bg-green-500 border-2 w-full h-8 rounded-lg'>transfer</button>
                </div>
            </div>
        </div>
    )
}