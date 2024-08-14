import React, { useEffect, useState } from 'react'
import employeeservices from './services/EmployeeServices'
import { useNavigate, useParams } from 'react-router-dom'
// const p = require('loadash')

const Employee = () => {
    const empid = useParams()
    const [id,setId] = useState(0)
    const [name,setName] = useState('')
    const [email,setEmail] =useState('')
    const [mobileNo,setMobileNo] = useState(0)
    const [designation,setDesignation] = useState('')
    const [gender,setGender]=useState('');
    const [course,setCourse] = useState('')
    const nav = useNavigate() 
    // console.log(typeof(empid))   
    useEffect(()=>{
        
        // if(empid){employeeservices.getEmployeeById(empid)
        //                             .then((res)=>(res.data))
        //                             .then(data =>
        //                             {
        //                                 setId(data._id);
        //                                 setName(data.name);
        //                                 setEmail(data.email);
        //                                 setMobileNo(data.mobileNo);
        //                                 setDesignation(data.designation);
        //                                 setGender(data.gender)
        //                                 setCourse(data.course)
        //                             }
        //                             )
        //          }
    },[])

    function save(e){
        const emp = {id,name,email,mobileNo,designation,gender,course}
        e.preventDefault()
        emp.id = id;emp.name=name;emp.email=email;emp.mobileNo=mobileNo;emp.designation=designation;emp.gender=gender;emp.course=course
        console.log((emp))
        // const employee = p.cloneDeep(emp);
        employeeservices.saveEmployee((emp)).then(nav('/'))
        
    }


  return (
    <div className='content-center'>
        
    <div className='card mb-2 m-auto'>
    <h2 className='text-center'>Create Employee</h2>
        <form>
            <table className='table table-centered table-striped text-center'>
                <thead></thead>
                <tbody>
                <tr>
                    <th><label>Id:</label></th>
                    <td><input type='text' placeholder='Enter ID' onChange={(e) => setId(e.target.value)}></input></td>
                </tr>
                <tr>
                    <th><label>Name:</label></th>
                    <td><input type='text' placeholder='Enter Name' onChange={(e) => setName(e.target.value)}></input></td>
                </tr>
                <tr>
                    <th><label>Email:</label></th>
                    <td><input type='text' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}></input></td>
                </tr>
                <tr>
                <th><label>MobileNo:</label></th>
                    <td><input type='text' placeholder='Enter Mobile No' onChange={(e) => setMobileNo(e.target.value)}></input></td>
                </tr>
                <tr>
                <th><label>Designation:</label></th>
                <td>
                <select value={designation} onChange={(e) => setDesignation(e.target.value)}>
                    <option value={""}>Designation:</option>
                    <option value="HR" >HR</option>
                    <option value="Manager">Manager</option>
                    <option value="Sales">Sales</option>
                </select>
                </td>
                </tr>
                <tr>
                <th><label>Gender:</label></th>
                <td>
                    <input type="radio" id="Male" name="radioGroup" value="Male" onChange={(e) => setGender(e.target.value)}/>
                    <label htmlFor="option1">Male</label>
                    <br />
                    <input type="radio" id="Female" name="radioGroup" value="Female" onChange={(e) => setGender(e.target.value)}/>
                    <label htmlFor="option2">Female</label>
                    {/* <Radio value="option3" name="radioGroup">Option 3</Radio> */}
                </td>
                </tr>

                <tr>
                    <th><label>course:</label></th>
                        <td>
                        <div>
                        <input type="checkbox" id="my-checkbox" name="my-checkbox" value="MCA" onChange={(e) => setCourse(e.target.value)} />
                        <label type = 'text'>MCA</label>
                        </div>
                        <div>
                        <input type="checkbox" id="my-checkbox" name="my-checkbox" value="BCA" onChange={(e) => setCourse(e.target.value)}/>
                        <label type = 'text'>BCA</label>
                        </div>
                        <div>
                        <input type="checkbox" id="my-checkbox" name="my-checkbox" value="BSC" onChange={(e) => setCourse(e.target.value)}/>
                        <label type = 'text'>BSC</label> 
                        </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button className='btn btn-success' onClick={(e) => save(e)}>Submit</button>
        </form>
    </div>
    </div>
  )
}

export default Employee