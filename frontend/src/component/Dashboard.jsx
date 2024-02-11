import { useState } from "react";   
import { Users } from "./Users";
import axios from 'axios';
export function Dashboard({ userId, setToId }) {
    const [balance, setBalance] = useState(0);
    const balanceCheck = async () => {
        const response = await axios.post('http://localhost:3000/api/v1/account/balance', {
            userId: userId
        });
        setBalance(parseInt(response.data.balance));  
    }
    balanceCheck();
    return (
        <div>
            <div className = 'grid grid-cols-2 p-6 border-t-4'>
                <h1 className = 'font-bold text-3xl'>Payments App</h1>
                <div className = 'flex justify-end gap-5'>
                    <h3>Hello, User</h3>
                    <button className = 'w-12 h-12 bg-gray-300 rounded-full text-center'>U</button>
                </div>
            </div>
            <div className = 'border-t-2 p-10 pl-5 pb-5'>
                <div className = 'font-bold text-2xl'>YOUR BALANCE: {balance}</div>
                <div className = 'font-bold  pt-10 pb-5 text-2xl'>User</div>
                <input className = 'w-full border-2 rounded-lg h-8' type = 'text' placeholder = 'find user...'></input>
            </div>
            <Users setToId = { setToId }/>
        </div>      
    )
}