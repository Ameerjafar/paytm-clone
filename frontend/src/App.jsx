import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import { Signup } from './component/Signup'
import { Signin } from './component/Signin'
import { Dashboard } from './component/Dashboard'
import { SendMoney } from "./component/SendMoney"
import { useState } from "react"
function App() {
  const [userId, setUserId] = useState('');
  const [toId, setToId] = useState('');
  const [reDirect, setreDirect] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Navigate to = '/signin' />} />
          <Route path = '/signin' element = {<Signin setUserId= { setUserId } setreDirect = { setreDirect }/>} />
          <Route path = '/signup' element = {<Signup />} />
          {reDirect && <Route path = "/dashboard" element = {<Dashboard userId = { userId } setToId = { setToId }/>} />}
          {reDirect && <Route path = 'sendmoney' element = {<SendMoney userId = { userId } toId = { toId }/>}/>}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
