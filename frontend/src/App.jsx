import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signup } from './component/Signup'
import { Signin } from './component/Signin'
import { Dashboard } from './component/Dashboard'
import { SendMoney } from "./component/SendMoney"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = '/signup' element = {<Signup />}></Route>
          <Route path = '/signin' element = {<Signin />}></Route>
          <Route path = '/dashboard' element = {<Dashboard />}></Route>
          <Route path = '/sendMoney' element = {<SendMoney />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
