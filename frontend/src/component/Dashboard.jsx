import { useNavigate } from "react-router-dom"

export function Dashboard() {
    const navigate = useNavigate();
    const onChangeHandler = () => {
        navigate('/sendMoney');
    }
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
                <div className = 'font-bold text-2xl'>YOUR BALANCE:  $50000</div>
                <div className = 'font-bold  pt-10 pb-5 text-2xl'>User</div>
                <input className = 'w-full border-2 rounded-lg h-8' type = 'text' placeholder = 'find user...'></input>
            </div>
            <div className = 'flex pl-5'>
                <div className = 'flex gap-2'>
                    <p className = 'w-12 h-12 bg-gray-300 rounded-full text-center pt-3'>A</p>
                    <p className = 'pt-3'>Ameer Jafar</p>
                </div>
                <div className = 'ml-auto pr-10'>
                    <button className = 'end-element w-36 h-10 end-element bg-black text-white rounded-lg text-center' onClick = {onChangeHandler}>send money</button>
                </div>
            </div>
        </div>      
    )
}