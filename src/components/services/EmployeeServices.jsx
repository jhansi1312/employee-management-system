import axios from "axios"


const api ='http://localhost:8000'

class EmployeeServices{
    getAllEmployees = () =>{return ( axios.get(api+'/'))}
    getEmployeeById = (id) =>{return (axios.get(api+'/'+id))}
    saveEmployee = (emp) => {return ( axios.post(api+'/',emp))}
    editEmployee = (id) => {return (axios.put(api+'/'+id))}
    deleteEmployeeById = (id) => {return (axios.delete(api+'/'+id))}
}

const employeeservices = new EmployeeServices()

export default employeeservices