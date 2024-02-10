import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
export function Users({ setToId }) {
    const [name, setName] = useState([]);
    
    const navigate = useNavigate();
    let allUsersName = [];
    const onChangeHandler = (to) => {

        setToId(to);
        navigate('/sendmoney');
    }
    const allUsers = async () => {
        const response = await axios.get('http://localhost:3000/api/v1/user/users');
        const len = response.data.allUsers.length;
        console.log(len);
        const allUsers = response.data.allUsers;
        console.log(allUsers);
        for(let i = 0; i < len; i++) {               
            const newDiv = <div key = {i} className = 'flex pl-5'>
                                <div className = 'flex gap-2 pb-2'>
                                    <p className = 'w-12 h-12 bg-gray-300 rounded-full text-center pt-3'>{allUsers[i].firstName[0].toUpperCase()}</p>
                                    <p className = 'pt-3'>{ allUsers[i].firstName +" "+allUsers[i].lastName }</p>
                                </div>
                                <div className = 'ml-auto pr-10'>
                                    <button className = 'end-element w-36 h-10 end-element bg-black text-white rounded-lg text-center' onClick = {() => {
                                        onChangeHandler(allUsers[i]._id)}
                                        }>send money</button>
                                </div>
                            </div>
            allUsersName[i] = newDiv;
    }
    console.log(allUsersName);
    setName(allUsersName);
    }
    useEffect(() => {
        allUsers();
    }, [])
    return (
        <div>
            {name}
        </div>
    )
}