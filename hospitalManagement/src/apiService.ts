import * as request from "request";
import { Employee } from "./employee";
import { EmployeeAttendence } from "./employeeAttendence";

const OPTIONS : any= {
    headers: {
        'User-Agent':'request'
    },
    json:true
}
export class ApiService {
    getEmployeeDetails = (employeeId: number, callBackFunction: (employee :Employee) => any) => {
        request.get('http://localhost:8081/hospitalManagement/admin/employee/id?employeeId='+employeeId, OPTIONS, 
        (error:any, response:any, body:any) => {var employee = new Employee(body); callBackFunction(employee)})
    }
    getEmployeeAttendence = (employeeId: number, callBackFunction: (employeeAttendence: EmployeeAttendence[]) => any) =>{
        request.get('http://localhost:8081/hospitalManagement/admin/employeePresence/id?employeeId='+employeeId, OPTIONS, 
        (error: any, response: any, body: any) => {callBackFunction(body.map( (employeeAttendence: any) => new EmployeeAttendence(employeeAttendence)))})
    }
}