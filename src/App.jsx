import { useState } from 'react'

import EmployeeList from './components/EmployeeList'
import Employee from './components/Employee'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmployeeList/>}></Route>
        <Route path='/list' element={<EmployeeList/>}></Route>
        <Route path='/add-emp'element={<Employee/>}></Route>
        <Route path='/add-emp/:id'element={<Employee/>}></Route>
      </Routes>
      
          
      
    </BrowserRouter>
  )
}

export default App
