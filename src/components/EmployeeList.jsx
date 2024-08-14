import React, { useEffect, useState } from 'react'
import styles from './EmpStyle.module.css'
import EmployeeServices from './services/EmployeeServices'
import employeeservices from './services/EmployeeServices'
import { useNavigate } from 'react-router-dom'
const EmployeeList = () => {

    const [employees,setEmployees] = useState([])
    const [topic,setTopic]  = useState('')
    const navigator = useNavigate()

    // const [employee,setEmployee]= useState({})
    useEffect(()=>{
        employeeservices.getAllEmployees()
        .then(res => (res.data))
        .then(data => setEmployees(data)) 
    },[])

    function createEmployee(){
        navigator('/add-emp')
    }

    function editEmployee(id){
        // e.preventDefault()
        // console.log(typeof(id))
        navigator(`/add-emp/${id}`)
        // navigator(`/add-emp/${id}`)
    }

    function deleteEmployee(id){
        employeeservices.deleteEmployeeById(id)
        navigator('/')
    }

    return (
        <div>
        <div className = 'container' >
            <br/>
            <h1 className='text-center'>List of Employees</h1>
            <br/>
            <button className='btn btn-primary' onClick={() => createEmployee()}>Add Employee</button>
            <span className='d-flex justify-content-end'>
                <input type="search"  placeholder="Search Employee" onChange={(e) => setTopic(e.target.value)} aria-label="Search">
                </input>
                <button className="btn btn-success" type="submit">Search</button>
            </span>
            <br/><br/>
            <form >
            <table className='table table-bordered table-striped text-center'>
                <thead>
                    <tr>
                        <th>Employee id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>MobileNo</th>
                        <th>Designation</th>
                        <th>Gender</th>
                        <th>course</th>
                        {/* <th>create Date</th> */}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       employees.map(
                        (emp) =>
                            <tr key={emp._id}>
                                <td>{emp._id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.email}</td>
                                <td>{emp.MobileNo}</td>
                                <td>{emp.Designation}</td>
                                <td>{emp.Gender}</td>
                                <td>{emp.course}</td>
                                <td>
                                    {/* const id = {emp._id} */}
                                    <button className= 'btn btn-info' onClick={() => editEmployee(emp._id)}>Edit</button>
                                    <button className='btn btn-danger' onClick={() => deleteEmployee(emp._id.id)}>Delete</button>
                                </td>
                            </tr>
                        
                       ) 
                    }
                </tbody>
            </table>
            </form>
        </div>
        </div>
    )
}

export default EmployeeList