import axios from "axios"


const api ='http://localhost:8000'

class EmployeeServices{
    getAllEmployees = () =>{return ( axios.get(api+'/'))}
    getEmployeeById = (id) =>{return axios.get(api+'/'+Number(id))}
    saveEmployee = (emp) => {return ( axios.post(api+'/',emp))}
}

const employeeservices = new EmployeeServices()

export default employeeservices