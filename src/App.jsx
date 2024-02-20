import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import DeleteUser from './DeleteUser'

function App() {
  return (
     <BrowserRouter>
         <Routes>
          <Route path='/create' element={<CreateUser/>}> </Route>
          <Route path='/update/:id' element={<UpdateUser/>}></Route>
          <Route path='/Moncurd' element={<Users/>}></Route>
        </Routes>
     </BrowserRouter>
    )
}

export default App