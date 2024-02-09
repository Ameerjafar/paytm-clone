import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signup } from './component/Signup'
import { Signin } from './component/Signin'
import { Dashboard } from './component/Dashboard'
import { SendMoney } from "./component/SendMoney"
import { useState } from "react"
function App() {
  const [userId, setUserId] = useState('');
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = '/signup' element = {<Signup />}></Route>
          <Route path = '/signin' element = {<Signin setUserId = {setUserId}/>}></Route>
          <Route path = '/dashboard' element = {<Dashboard userId = { userId }/>}></Route>
          <Route path = '/sendMoney' element = {<SendMoney userId = { userId }/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
