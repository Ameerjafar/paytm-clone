import { useNavigate } from "react-router-dom";
export function Users() {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const onChangeHandler = () => {

        navigate('/sendMoney');
    }
    return (
        <div className = 'flex pl-5'>
            <div className = 'flex gap-2'>
                <p className = 'w-12 h-12 bg-gray-300 rounded-full text-center pt-3'>A</p>
                <p className = 'pt-3'>{name}</p>
            </div>
            <div key = {`${userId}`}className = 'ml-auto pr-10'>
                <button className = 'end-element w-36 h-10 end-element bg-black text-white rounded-lg text-center' onClick = {onChangeHandler}>send money</button>
            </div>
        </div>
    )
}