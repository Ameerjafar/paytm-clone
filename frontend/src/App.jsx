import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signup } from './component/Signup'
import { Signin } from './component/Signin'
import { Dashboard } from './component/Dashboard'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = '/signup' element = {<Signup />}></Route>
          <Route path = '/signin' element = {<Signin />}></Route>
          <Route path = '/dashboard' element = {<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App